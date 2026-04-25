import { Injectable, signal } from "@angular/core";
import { PopUpContentType } from "../../../types/pop-up.type";
import { Coordinates } from "../../../types/coordinates.type";

@Injectable({
  providedIn: "root",
})
export class PopUpService {
  isOpen = signal(false);
  content = signal<PopUpContentType>(null);
  msg = signal<string | null>(null);
  coords = signal<Coordinates | null>(null);

  open(contentType: PopUpContentType, message?: string, coords?: Coordinates) {
    this.content.set(contentType);
    this.isOpen.set(true);
    this.msg.set(message ?? null);
    this.coords.set(coords ?? null);
  }

  close() {
    this.isOpen.set(false);
    this.content.set(null);
    this.msg.set(null);
    this.coords.set(null);
  }
}
