import { Component } from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-meet",
  imports: [Button, RouterLink],
  templateUrl: "./meet.html",
  styleUrl: "./meet.scss",
})
export class Meet {}
