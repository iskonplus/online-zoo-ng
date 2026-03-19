import { Component } from "@angular/core";
import { Favorite } from "./components/favorite/favorite";

@Component({
  selector: "app-landing",
  imports: [Favorite],
  templateUrl: "./landing.html",
  styleUrl: "./landing.scss",
})
export class Landing {}
