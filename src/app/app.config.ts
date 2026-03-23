import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";

import { routes } from "./routers/app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { errorInterceptor } from "./core/interceptors/error-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
       withInterceptors([errorInterceptor]),
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
