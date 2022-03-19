import faker from 'faker'
import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const fakerUrl = faker.internet.url()

// System Under Test factory
const makeSut = (url: string = fakerUrl): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = fakerUrl
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
