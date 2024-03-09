export interface HttpResponse<T> {
  body: T | null
  massage: string
  statusCode: number
  statusText: string
}

export interface HttpRequest<T> {
  body: T
}