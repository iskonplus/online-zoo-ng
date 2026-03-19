import { Routes } from "@angular/router";
import { Auth } from "../pages/auth/auth";

export const authRoutes: Routes = [
  {
    path: "auth",
    component: Auth,
    children: [
      {
        path: "registration",
        loadComponent: async () => {
          const m = await import("../pages/auth/registration/registration");
          return m.Registration;
        },
      },
      {
        path: "sign-in",
        loadComponent: async () => {
          const m = await import("../pages/auth/sign-in/sign-in");
          return m.SignIn;
        },
      },
    ],
  },
];
