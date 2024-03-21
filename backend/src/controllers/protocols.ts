interface ResponseBody<B, H> {
  body: B | null
  header?: H | undefined 
  message: string
  statusCode: number
  statusText: string
}

export type HttpResponse<B, H = undefined> = ResponseBody<B | null, H | undefined>

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
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}
