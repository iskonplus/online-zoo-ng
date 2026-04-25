import { PopUp } from './../../shared/components/pop-up/pop-up';
import { PopUpService } from './../../shared/services/pop-up/pop-up.service';
import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from '@angular/core';
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const popUpService = inject(PopUpService);

  return next(req).pipe(
    catchError((error) => {
      let message = error.error.error;

      if (error.status >= 500) message = "Something went wrong. Please, refresh the page."
      
      console.error("[HTTP ERROR] ===> ", error);
      if (error.status < 500) popUpService.open("error", message);

      return throwError(() => new Error(message));
    }),
  );
};
