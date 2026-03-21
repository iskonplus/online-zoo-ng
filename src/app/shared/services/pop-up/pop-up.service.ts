import { Injectable, signal } from "@angular/core";
import { PopUpContentType } from "../../../types/pop-up.type";

@Injectable({
  providedIn: "root",
})
export class PopUpService {
  isOpen = signal(false);
  content = signal<PopUpContentType>(null);

  open(contentType: PopUpContentType) {
    this.content.set(contentType);
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    this.content.set(null);
  }
}
