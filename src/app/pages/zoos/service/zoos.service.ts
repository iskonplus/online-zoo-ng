import { Injectable } from "@angular/core";
import {animalVideosId} from "../../../data/petImages"

@Injectable({
  providedIn: "root",
})
export class ZoosService {
  getVideoIds(id: number): string[] {
    return animalVideosId[id];
  }
}
