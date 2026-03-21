import { Component, inject, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { PopUp } from "./shared/components/pop-up/pop-up";
import { CommonModule } from "@angular/common";
import { PopUpService } from "./shared/services/pop-up/pop-up.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Header, Footer, PopUp, CommonModule],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  public popUpService = inject(PopUpService);
  protected readonly title = signal("online-zoo");
}
