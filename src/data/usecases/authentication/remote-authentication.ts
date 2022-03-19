import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from 'data/protocols/http/http-response'
import { InvalidCredentialsError } from 'domain/models/errors/invalid-credentials-error'
import { AuthenticationParams } from 'domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async auth (params: AuthenticationParams): Promise<HttpResponse> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.Unauthorized:
        throw new InvalidCredentialsError('Unauthorized')
      default:
        return Promise.resolve(httpResponse)
    }
  }
}
