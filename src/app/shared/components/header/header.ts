import { AuthService } from './../../services/auth/auth.service';
import { Component, DestroyRef, inject } from "@angular/core";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { PopUpService } from "../../services/pop-up/pop-up.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { filter } from "rxjs";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  private popUpService = inject(PopUpService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  public authService = inject(AuthService);

  isBurgerBtnActive = false;
  isMenuOpen = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.closeMenu());
  }

  get petRout(): string[] {
  const url = this.router.url.split('/');
  const id = url[2];

  return id ? ['/zoos', id] : ['/zoos', '1'];
}

  openPopUp() {
    if ( this.authService.currentUser()) this.popUpService.open("user-profile");
    if (!this.authService.currentUser()) this.popUpService.open("auth");
  }

  toggleMenu() {
    this.isBurgerBtnActive = !this.isBurgerBtnActive;
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isBurgerBtnActive = false;
    this.isMenuOpen = false;
  }
}
