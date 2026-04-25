import { HttpInterceptorFn } from "@angular/common/http";


  const baseUrl: string =
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod";

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith('http')) return next(req);
  return next(req.clone({url: `${baseUrl}/${req.url}`}));
};
