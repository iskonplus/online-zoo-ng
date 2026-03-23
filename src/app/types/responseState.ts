export interface ResponseState<T> {
  data: T | null;
  error: string | null;
  loading?: boolean;
}