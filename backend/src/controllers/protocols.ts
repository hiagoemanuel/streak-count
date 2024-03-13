interface ResponseBody<T> {
  body: T | null
  message: string
  statusCode: number
  statusText: string
}

export type HttpResponse<T> = ResponseBody<T | null>

export type HttpRequest<T> = ReqParams<T> & { [K in keyof T]: T[K] }

export type Body<T> = { body: T }
export type Headers<T> = { headers: T }
export type Params<T> = { params: T }

type ReqParams<T> =
  T extends Body<infer B>
    ? { body: B }
    : T extends Headers<infer H>
      ? { headers: H }
      : T extends Params<infer P>
        ? { params: P }
        : never

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}
