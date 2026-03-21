import { Component, DestroyRef, inject, Input } from "@angular/core";
import { PopUpService } from "../../services/pop-up/pop-up.service";
import { PopUpContentType } from "../../../types/pop-up.type";
import { ContentAuth } from "./components/auth/content-auth";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { filter } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-pop-up",
  imports: [ContentAuth],
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
