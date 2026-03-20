import { Component } from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-our-user",
  imports: [Button, RouterLink],
  templateUrl: "./our-user.html",
  styleUrl: "./our-user.scss",
})
export class OurUser {}
