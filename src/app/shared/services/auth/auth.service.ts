import { computed, Injectable, signal } from "@angular/core";
import { PublicUser } from "../../../types/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token = signal<string | null>(localStorage.getItem("token"));
  currentUser = signal<PublicUser | null>(this.getStoredUser());

  isAuthenticated = computed(() => !!this.token());

  setAuth(token: string, user: PublicUser): void {
    this.token.set(token);
    this.currentUser.set(user);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  clearAuth(): void {
    this.token.set(null);
    this.currentUser.set(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  private getStoredUser(): PublicUser | null {
    const user = localStorage.getItem("user");
    if (!user) return null;

    try {
      return JSON.parse(user) as PublicUser;
    } catch {
      return null;
    }
  }
}
