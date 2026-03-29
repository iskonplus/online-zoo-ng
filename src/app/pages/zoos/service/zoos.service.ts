import { Injectable } from "@angular/core";
import { animalVideosId } from "../../../data/petImages";
import { Coordinates } from "../../../types/coordinates.type";

@Injectable({
  providedIn: "root",
})
export class ZoosService {
  getVideoIds(id: number): string[] {
    return animalVideosId[id];
  }

  private parseCoordinate(value: string): number | null {
    const match = value.match(/([\d.]+)°\s*([NSEW])/i);
    if (!match) return null;

    const coordinateStr = match[1];
    const direction = match[2];

    if (!coordinateStr || !direction) return null;

    let coordinate = Number(coordinateStr);

    if (direction.toUpperCase() === "S" || direction.toUpperCase() === "W") {
      coordinate = -coordinate;
    }

    return coordinate;
  }

  parseCoordinates([latStr, lngStr]: string[]): Coordinates | null {
    const lat = this.parseCoordinate(latStr);
    const lng = this.parseCoordinate(lngStr);

    if (lat === null || lng === null) return null;

    return {
      lat: lat.toString(),
      lng: lng.toString(),
    };
  }
}
