import { PopUpService } from './../../../../services/pop-up/pop-up.service';
import { Component, inject } from "@angular/core";
import { Button } from "../../../../button/button";
import { AuthService } from "../../../../services/auth/auth.service";
import { PublicUser } from "../../../../../types/user";

@Component({
  selector: "app-user-profile",
  imports: [Button],
  templateUrl: "./user-profile.html",
  styleUrl: "./user-profile.scss",
})
export class UserProfile {
  private authService = inject(AuthService);
  private popUpService = inject(PopUpService);
  
  user: PublicUser | null = this.authService.currentUser();

  logout(): void {
    this.authService.clearAuth();
    this.popUpService.open("auth");
}
}