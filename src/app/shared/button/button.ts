import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  imports: [],
  templateUrl: "./button.html",
  styleUrl: "./button.scss",
})

export class Button {
  @Input() variant?:
    "orange" | "green" | "outline" | "outline-whit" | "outline-blue" | "slider-outline-blue";
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() disabled = false;
}
