export enum ErrorType {
    danger,
    warning,
}

export interface Error {
    type: ErrorType
    message: string
}

export interface ResponseData<T> {
    data: T
    loading: boolean
    error: Error | null
}
