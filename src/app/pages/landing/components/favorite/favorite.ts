import { Component, Input } from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-favorite",
  imports: [Button, RouterLink],
  templateUrl: "./favorite.html",
  styleUrl: "./favorite.scss",
})
export class Favorite {
  @Input() initialRout = "";

}
