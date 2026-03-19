import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { Landing } from "../pages/landing/landing";
import { authRoutes } from "./auth.routes";
import { mapRoutes } from "./map.routes";
import { zoosRoutes } from "./zoos.routes";
import { contactRoutes } from "./contact.routes";
import { NotFound } from "../pages/not-found/not-found";

export const routes: Routes = [
  { path: "", pathMatch: "full", component: Landing },
  ...mapRoutes,
  ...zoosRoutes,
  ...contactRoutes,
  ...authRoutes,
  { path: "**", component: NotFound },
];
