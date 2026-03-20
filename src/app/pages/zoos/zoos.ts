import { Component } from "@angular/core";
import { YourDonation } from "../../shared/components/your-donation/your-donation";
import { Button } from "../../shared/button/button";

@Component({
  selector: "app-zoos",
  imports: [YourDonation, Button],
  templateUrl: "./zoos.html",
  styleUrl: "./zoos.scss",
})
export class Zoos {}
