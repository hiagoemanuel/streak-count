export interface HttpResponse<T> {
  body: T
  statusCode: number
}

export interface HttpRequest<T> {
  body: T
}