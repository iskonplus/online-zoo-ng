import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";

import { routes } from "./routers/app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { errorInterceptor } from "./core/interceptors/error-interceptor";
import { baseUrlInterceptor } from "./core/interceptors/base-url-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
       withInterceptors([baseUrlInterceptor, errorInterceptor]),
    ),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: "enabled",
      }),
    ),
  ],
};
