import MissingParamError from './missing-param-error'
import UnauthorizedError from './unauthorized-error'

export default class HttpResponse {
  static ok () {
    return {
      statusCode: 200
    }
  }

  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}
