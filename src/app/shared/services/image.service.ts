import { Injectable } from "@angular/core";
import { petIcons, petImages } from "../../data/petImages";

@Injectable({
  providedIn: "root",
})
export class ImageService {

 storIconKey = "pet-icons";
 storImageKey = "pet-images";


initPetIconStorage(): void {
  const existing = localStorage.getItem(this.storIconKey);
  if (!existing) localStorage.setItem(this.storIconKey, JSON.stringify(petIcons));
}


getPetIconById(id: number): string {
  const stored = localStorage.getItem(this.storIconKey);
  if (!stored) return "";
  const images: Record<number, string> = JSON.parse(stored);
  return images[id] ?? "";
}


initPetImagesStorage(): void {
  const existing = localStorage.getItem(this.storImageKey);
  if (!existing) localStorage.setItem(this.storImageKey, JSON.stringify(petImages));
}

getPetImageById(id: number): string {
  const stored = localStorage.getItem(this.storImageKey);
  if (!stored) return "";
  const images: Record<number, string> = JSON.parse(stored);
  return images[id] ?? "";
}
}
