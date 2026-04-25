import { Component, inject } from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { PopUpService } from "../../../../shared/services/pop-up/pop-up.service";

@Component({
  selector: "app-pay-feed",
  imports: [Button],
  templateUrl: "./pay-feed.html",
  styleUrl: "./pay-feed.scss",
})
export class PayFeed {
    private popUpService = inject(PopUpService);

  openAuthPopUp() {
    this.popUpService.open("donate-first-step");
  }
}
