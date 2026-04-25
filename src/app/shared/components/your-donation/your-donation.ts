import { Component, inject } from "@angular/core";
import { Button } from "../../button/button";
import { PopUpService } from "../../services/pop-up/pop-up.service";

@Component({
  selector: "app-your-donation",
  imports: [Button],
  templateUrl: "./your-donation.html",
  styleUrl: "./your-donation.scss",
})
export class YourDonation {
  private popUpService = inject(PopUpService);

  openAuthPopUp() {
    this.popUpService.open("donate-first-step");
  }
}
