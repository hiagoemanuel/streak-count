import { HttpResponse, HttpStatus } from './protocols'

interface IResponse<B, H> {
  body: B,
  header?: H,
  message: string
}

const response = <B, H = undefined>(res: IResponse<B, H>, status: keyof typeof HttpStatus): HttpResponse<B, H> => ({
  body: res.body,
  header: res.header,
  message: res.message,
  statusCode: HttpStatus[status],
  statusText: status
})

type ResponseType = <B, H = undefined>(body: B, message: string, header?: H) => HttpResponse<B, H>

export const ok: ResponseType = (body, message, header) => response({ body, message, header }, 'OK')
export const created: ResponseType = (body, message, header) => response({ body, message, header }, 'CREATED')
export const badRequest: ResponseType = (body, message, header) => response({ body, message, header }, 'BAD_REQUEST')
export const unauthorized: ResponseType = (body, message, header) => response({ body, message, header }, 'UNAUTHORIZED')
export const notFound: ResponseType = (body, message, header) => response({ body, message, header }, 'NOT_FOUND')
export const internalServerError: ResponseType = (body, message, header) => response({ body, message, header }, 'INTERNAL_SERVER_ERROR')
