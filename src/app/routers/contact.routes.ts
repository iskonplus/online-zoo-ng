import { Routes } from "@angular/router";

export const contactRoutes: Routes = [
  {
    path: "contact",
    loadComponent: async () => {
      const m = await import("../pages/contact/contact");
      return m.Contact;
    },
  },
];