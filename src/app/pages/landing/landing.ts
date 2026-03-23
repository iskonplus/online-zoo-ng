import { FeedBack, FeedBackResponseDTO } from './../../types/feedback';
import { Component, inject, OnInit } from "@angular/core";
import { Favorite } from "./components/favorite/favorite";
import { Welcome } from "./components/welcome/welcome";
import { Meet } from "./components/meet/meet";
import { PayFeed } from "./components/pay-feed/pay-feed";
import { OurUser } from "./components/our-user/our-user";
import { CareFor } from "./components/care-for/care-for";
import { Api } from "../../shared/services/api/api";
import { PetsResponseDTO } from "../../types/pets";
import { Observable } from "rxjs";
import { ResponseState } from "../../types/responseState";
import { ImageService } from "../../shared/services/image.service";

@Component({
  selector: "app-landing",
  imports: [Favorite, Welcome, Meet, PayFeed, OurUser, CareFor],
  templateUrl: "./landing.html",
  styleUrl: "./landing.scss",
})
export class Landing implements OnInit {
  public apiService = inject(Api);
  public imageService = inject(ImageService);

  petsState$: Observable<ResponseState<PetsResponseDTO>> | null = null;
  feedBackState$: Observable<ResponseState<FeedBackResponseDTO>> | null = null;

  ngOnInit(): void {
    this.imageService.initPetImagesStorage();
    this.petsState$ = this.apiService.getAll<PetsResponseDTO>("pets");
    this.feedBackState$ = this.apiService.getAll<FeedBackResponseDTO>("feedback");
  }
}
