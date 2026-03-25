import { ImageService } from "./../../shared/services/image.service";
import { Component, inject, OnInit } from "@angular/core";
import { YourDonation } from "../../shared/components/your-donation/your-donation";
import { Button } from "../../shared/button/button";
import { Observable } from "rxjs";
import { ResponseState } from "../../types/responseState";
import { CameraCardResponseDTO } from "../../types/pets";
import { Api } from "../../shared/services/api/api";
import { AsyncPipe } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-zoos",
  imports: [YourDonation, Button, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: "./zoos.html",
  styleUrl: "./zoos.scss",
})
export class Zoos implements OnInit {
  private apiService = inject(Api);
  private imageService = inject(ImageService);
  sideBarState$: Observable<ResponseState<CameraCardResponseDTO>> | null = null;

  ngOnInit(): void {
    this.imageService.initPetIconStorage();
    this.sideBarState$ =
      this.apiService.getAll<CameraCardResponseDTO>("cameras");
  }

  getIconById(id: number): string {
    return this.imageService.getPetIconById(id);
  }
}
