import { Routes } from "@angular/router";

export const mapRoutes: Routes = [
  {
    path: "map",
    loadComponent: async () => {
      const m = await import("../pages/map/map");
      return m.Map;
    },
  },
];
