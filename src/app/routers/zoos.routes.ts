import { Routes } from "@angular/router";

export const zoosRoutes: Routes = [
  {
    path: "zoos/:petId",
    loadComponent: async () => {
      const m = await import("../pages/zoos/zoos");
      return m.Zoos;
    },
  },
];