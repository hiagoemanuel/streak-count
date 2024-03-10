import { HttpResponse, HttpStatus } from './protocols'

interface IResponse<T> {
  body: T
  message: string
}

const response = <T>(res: IResponse<T>, status: keyof typeof HttpStatus): HttpResponse<T> => ({
  body: res.body,
  message: res.message,
  statusCode: HttpStatus[status],
  statusText: status
})

type ResponseType = <B>(body: B, message: string) => HttpResponse<B>

export const ok: ResponseType = (body, message) => response({ body, message }, 'OK')
export const created: ResponseType = (body, message) => response({ body, message }, 'CREATED')
export const badRequest: ResponseType = (body, message) => response({ body, message }, 'BAD_REQUEST')
export const internalServerError: ResponseType = (body, message) => response({ body, message }, 'INTERNAL_SERVER_ERROR')
