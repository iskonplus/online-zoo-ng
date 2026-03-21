import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { PopUp } from "./shared/components/pop-up/pop-up";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Header, Footer, PopUp],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("online-zoo");
}
