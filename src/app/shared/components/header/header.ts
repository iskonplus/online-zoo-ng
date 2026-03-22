import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { PopUpService } from "../../services/pop-up/pop-up.service";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  private popUpService = inject(PopUpService);

  openAuthPopUp() {
    // this.popUpService.open("auth");
    this.popUpService.open("error");
  }
}
