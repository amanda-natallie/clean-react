import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  class HttpPostClientSpy implements HttpPostClient {
    url?: string

    async post (url: string): Promise<void> {
      this.url = url
      return await Promise.resolve()
    }
  }
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'http://localhost:3000/auth'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
