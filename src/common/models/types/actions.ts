export type FieldError = { [key: string]: string[] | undefined };

export type ActionReturn<T = unknown> = {
  errors?: FieldError;
  statusCode?: number;
  data?: T;
};
