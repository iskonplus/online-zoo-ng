import { Component } from "@angular/core";
import { Favorite } from "./components/favorite/favorite";
import { Welcome } from "./components/welcome/welcome";
import { Meet } from "./components/meet/meet";
import { PayFeed } from "./components/pay-feed/pay-feed";


@Component({
  selector: "app-landing",
  imports: [Favorite, Welcome, Meet, PayFeed],
  templateUrl: "./landing.html",
  styleUrl: "./landing.scss",
})
export class Landing {}
