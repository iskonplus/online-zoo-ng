import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SliderService {
  next<T>(arr: T[]): T[] {
    if (!arr.length) return arr;

    const [first, ...rest] = arr;
    return [...rest, first];
  }

  prev<T>(arr: T[]): T[] {
    if (!arr.length) return arr;

    const last = arr[arr.length - 1];
    const rest = arr.slice(0, -1);

    return [last, ...rest];
  }
}
