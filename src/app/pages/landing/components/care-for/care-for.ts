import { Component } from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-care-for",
  imports: [Button, RouterLink],
  templateUrl: "./care-for.html",
  styleUrl: "./care-for.scss",
})
export class CareFor {}
