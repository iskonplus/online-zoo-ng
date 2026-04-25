import { Component } from "@angular/core";
import { YourDonation } from "../../../../shared/components/your-donation/your-donation";

@Component({
  selector: "app-welcome",
  imports: [YourDonation],
  templateUrl: "./welcome.html",
  styleUrl: "./welcome.scss",
})
export class Welcome {}
