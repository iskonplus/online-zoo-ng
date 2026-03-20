import { Component } from "@angular/core";
import { Favorite } from "./components/favorite/favorite";
import { Welcome } from "./components/welcome/welcome";
import { Meet } from "./components/meet/meet";
import { PayFeed } from "./components/pay-feed/pay-feed";
import { OurUser } from "./components/our-user/our-user";
import { CareFor } from "./components/care-for/care-for";


@Component({
  selector: "app-landing",
  imports: [Favorite, Welcome, Meet, PayFeed, OurUser, CareFor],
  templateUrl: "./landing.html",
  styleUrl: "./landing.scss",
})
export class Landing {}
