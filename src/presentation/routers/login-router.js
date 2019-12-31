import HttpResponse from '../helpers/http-response'

export default class LoginRouter {
  constructor (authUserCase) {
    this.authUserCase = authUserCase
  }

  async route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest('email')
      }
      if (!password) {
        return HttpResponse.badRequest('password')
      }

      const accessToken = this.authUserCase.auth(email, password)
      if (!accessToken) {
        return HttpResponse.unauthorizedError()
      }
      return HttpResponse.ok({ accessToken })
    } catch (error) {
    //   console.error(error)
      return HttpResponse.serverError()
    }
  }
}
