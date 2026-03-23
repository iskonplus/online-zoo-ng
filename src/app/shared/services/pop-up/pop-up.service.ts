import { Injectable, signal } from "@angular/core";
import { PopUpContentType } from "../../../types/pop-up.type";

@Injectable({
  providedIn: "root",
})
export class PopUpService {
  isOpen = signal(false);
  content = signal<PopUpContentType>(null);
  msg = signal<string | null>(null);

  open(contentType: PopUpContentType, message?: string) {
    this.content.set(contentType);
    this.isOpen.set(true);
    this.msg.set(message ?? null);
  }

  close() {
    this.isOpen.set(false);
    this.content.set(null);
    this.msg.set(null);
  }
}
