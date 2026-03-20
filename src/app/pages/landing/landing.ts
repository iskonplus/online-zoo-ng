import { Component } from "@angular/core";
import { Favorite } from "./components/favorite/favorite";
import { Welcome } from "./components/welcome/welcome";
import { Meet } from "./components/meet/meet";


@Component({
  selector: "app-landing",
  imports: [Favorite, Welcome, Meet],
  templateUrl: "./landing.html",
  styleUrl: "./landing.scss",
})
export class Landing {}
