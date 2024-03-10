export interface HttpResponse<T> {
  body: T | null
  message: string
  statusCode: number
  statusText: string
}

export interface HttpRequest<T> {
  body: T
}

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500
}
