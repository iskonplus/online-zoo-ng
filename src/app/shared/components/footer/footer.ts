import { Component, inject } from "@angular/core";
import { Button } from "../../button/button";
import { RouterLink } from "@angular/router";
import { PopUpService } from "../../services/pop-up/pop-up.service";

@Component({
  selector: "app-footer",
  imports: [RouterLink, Button],
  templateUrl: "./footer.html",
  styleUrl: "./footer.scss",
})
export class Footer {
    private popUpService = inject(PopUpService);

  openAuthPopUp() {
    this.popUpService.open("donate-volunteers");
  }
}
