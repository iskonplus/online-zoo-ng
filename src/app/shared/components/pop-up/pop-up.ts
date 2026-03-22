import { Component, DestroyRef, inject, Input } from "@angular/core";
import { PopUpService } from "../../services/pop-up/pop-up.service";
import { PopUpContentType } from "../../../types/pop-up.type";
import { ContentAuth } from "./components/auth/content-auth";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { filter } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";
import { ContentDonateVolunteers } from "./components/content-donate-volunteers/content-donate-volunteers";
import { DonateFirstStep } from "./components/donate-first-step/donate-first-step";
import { SuccessfulDonation } from "./components/successful-donation/successful-donation";
import { UserProfile } from "./components/user-profile/user-profile";
import { ContentError } from "./components/content-error/content-error";


@Component({
  selector: "app-pop-up",
  imports: [ContentAuth, ContentDonateVolunteers, DonateFirstStep, SuccessfulDonation, UserProfile, ContentError],
  templateUrl: "./pop-up.html",
  styleUrl: "./pop-up.scss",
})
export class PopUp {
  @Input() contentType: PopUpContentType = null;
  private popUpService = inject(PopUpService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.popUpService.close());
  }

  closePopUp() {
    this.popUpService.close();
  }
}
