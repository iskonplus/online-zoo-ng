import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PopUpService {
  isOpen = signal(false);
  // content = signal<null | "map" | "donation" | "auth">(null);

  open(type: "map" | "donation" | "auth") {
    // this.content.set(type);
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    // this.content.set(null);
  }
}
