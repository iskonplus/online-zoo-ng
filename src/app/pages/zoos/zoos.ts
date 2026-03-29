import { ImageService } from "./../../shared/services/image.service";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { YourDonation } from "../../shared/components/your-donation/your-donation";
import { Button } from "../../shared/button/button";
import { BehaviorSubject, filter, map, Observable, Subject } from "rxjs";
import { ResponseState } from "../../types/responseState";
import { CameraCardResponseDTO, PetInfoResponseDTO } from "../../types/pets";
import { Api } from "../../shared/services/api/api";
import { AsyncPipe } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ZoosService } from "./service/zoos.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-zoos",
  imports: [
    YourDonation,
    Button,
    AsyncPipe,
    MatProgressSpinnerModule,
    RouterLink,
  ],
  templateUrl: "./zoos.html",
  styleUrl: "./zoos.scss",
})
export class Zoos implements OnInit {
  private apiService = inject(Api);
  private imageService = inject(ImageService);
  private route = inject(ActivatedRoute);
  private zoosService = inject(ZoosService);
  private sanitizer = inject(DomSanitizer);

  @ViewChildren("firstSlide") slides!: QueryList<ElementRef<HTMLElement>>;

  // petId = this.route.snapshot.paramMap.get("petId");
  sideBarState$: Observable<ResponseState<CameraCardResponseDTO>> | null = null;
  petInfoState$: Observable<ResponseState<PetInfoResponseDTO>> | null = null;
  videoIds$ = new BehaviorSubject<string[]>([]);
  mainVideoId$ = new BehaviorSubject<string>("");
  isSideBarOpen = false;

  viewportHeight = signal(0);
  visibleSlidesCount = 4;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const petId = Number(params.get("petId"));
      this.initPage(petId);
    });
  }

  initPage(id: number): void {
    this.imageService.initPetIconStorage();
    this.sideBarState$ =
      this.apiService.getAll<CameraCardResponseDTO>("cameras");
    this.petInfoState$ = this.apiService.getById<PetInfoResponseDTO>(
      "pets",
      `${id}`,
    );

    const videoIds = this.zoosService.getVideoIds(Number(id));
    this.videoIds$.next(videoIds);
    this.mainVideoId$.next(videoIds[0]);
  }

  public mainVideoUrl$ = this.mainVideoId$.pipe(
    map((id) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${id}`,
      ),
    ),
  );

  getIconById(id: number): string {
    return this.imageService.getPetIconById(id);
  }

  getPetImageById(id: number): string {
    return this.imageService.getPetImageById(id);
  }

  onVideoSelect(id: string): void {
    this.mainVideoId$.next(id);
  }

  ngAfterViewInit() {
    this.slides.changes.subscribe(
      (list: QueryList<ElementRef<HTMLElement>>) => {
        requestAnimationFrame(() => {
          const height = list.first?.nativeElement.offsetHeight ?? 0;
          if (!height) return;
          this.viewportHeight.set(height * this.visibleSlidesCount);
        });
      },
    );
  }
}
