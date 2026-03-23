import { Component, Input } from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { RouterLink } from "@angular/router";
import { PetsResponseDTO } from "../../../../types/pets";
import { Observable } from "rxjs";
import { ResponseState } from "../../../../types/responseState";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-meet",
  imports: [Button, RouterLink, AsyncPipe],
  templateUrl: "./meet.html",
  styleUrl: "./meet.scss",
})
export class Meet {
    @Input() petsData: Observable<ResponseState<PetsResponseDTO>> | null = null;
}
