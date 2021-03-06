import UnauthorizedError from './unauthorized-error'
import ServerError from './server-error'

export default class HttpResponse {
  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }

  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
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
      statusCode: 500,
      body: new ServerError()
    }
  }
}
