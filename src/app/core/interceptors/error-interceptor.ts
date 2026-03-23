import { PopUp } from './../../shared/components/pop-up/pop-up';
import { PopUpService } from './../../shared/services/pop-up/pop-up.service';
import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from '@angular/core';
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const popUpService = inject(PopUpService);

  return next(req).pipe(
    catchError((error) => {
      let message = "";

      if (error.status >= 500) message = "Something went wrong. Please, refresh the page.";
      if (error.status === 404) message = "Not found";
      if (error.status === 400) message = "Bad request";
      if (error.status === 0) message = "Network error";

      console.error("[HTTP ERROR] ===> ", error);
      popUpService.open("error");

      return throwError(() => new Error(message));
    }),
  );
};
