import { Component, inject, Input } from "@angular/core";
import { Coordinates } from "../../../../../types/coordinates.type";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-content-map",
  imports: [],
  templateUrl: "./content-map.html",
  styleUrl: "./content-map.scss",
})
export class ContentMap {
  private sanitizer = inject(DomSanitizer);

  @Input() coordinates: Coordinates | null = null;

  get mapUrl(): SafeResourceUrl | null {
    if (!this.coordinates) return null;

    const url = `https://www.google.com/maps?q=${this.coordinates.lat},${this.coordinates.lng}&z=6&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
