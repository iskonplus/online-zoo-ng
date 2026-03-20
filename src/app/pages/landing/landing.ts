import { Component } from "@angular/core";
import { Favorite } from "./components/favorite/favorite";
import { Welcome } from "./components/welcome/welcome";


@Component({
  selector: "app-landing",
  imports: [Favorite, Welcome],
  templateUrl: "./landing.html",
  styleUrl: "./landing.scss",
})
export class Landing {}
