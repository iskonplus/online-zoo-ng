import { Routes } from "@angular/router";

export const zoosRoutes: Routes = [
  {
    path: "zoos",
    loadComponent: async () => {
      const m = await import("../pages/zoos/zoos");
      return m.Zoos;
    },
  },
];