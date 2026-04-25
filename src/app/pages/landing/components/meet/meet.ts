import {
  Component,
  inject,
  Input,
} from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { RouterLink } from "@angular/router";
import {  PetsResponseDTO } from "../../../../types/pets";
import { Observable } from "rxjs";
import { ResponseState } from "../../../../types/responseState";
import { AsyncPipe } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ImageService } from "../../../../shared/services/image.service";
// import { SliderService } from "../../../../shared/services/slider.service";
import { SliderDirection } from "../../../../types/slider-direction";

@Component({
  selector: "app-meet",
  imports: [Button, RouterLink, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: "./meet.html",
  styleUrl: "./meet.scss",
})
export class Meet {
  private imageService = inject(ImageService);
  // private sliderService = inject(SliderService);

    @Input() initialRout = "";

  @Input() petsData: Observable<ResponseState<PetsResponseDTO>> | null = null;
  getImageById(id: number): string {
    return this.imageService.getPetImageById(id);
  }

    slide(arg: SliderDirection){
      console.log("slider works");
    }
}