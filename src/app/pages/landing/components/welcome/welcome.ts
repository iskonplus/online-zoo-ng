import { Component } from "@angular/core";
import { Button } from "../../../../shared/button/button";

@Component({
  selector: "app-welcome",
  imports: [Button],
  templateUrl: "./welcome.html",
  styleUrl: "./welcome.scss",
})
export class Welcome {}
