import { Component, inject, Input } from "@angular/core";
import { PopUpService } from "../../services/pop-up/pop-up.service";

@Component({
  selector: "app-pop-up",
  imports: [],
  templateUrl: "./pop-up.html",
  styleUrl: "./pop-up.scss",
})
export class PopUp {
  @Input() isOpen = false;
  private popUpService = inject(PopUpService)

  closePopUp() {
    this.popUpService.close();
  }
}
