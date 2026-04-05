import { ImageService } from "./../../shared/services/image.service";
import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  signal,
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
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { PopUpService } from "../../shared/services/pop-up/pop-up.service";

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
  private destroyRef = inject(DestroyRef);
  private popUpService = inject(PopUpService);

  @ViewChildren("firstSlide") slides!: QueryList<ElementRef<HTMLElement>>;

  sideBarState = signal<ResponseState<CameraCardResponseDTO> | null>(null);
  petInfoState$: Observable<ResponseState<PetInfoResponseDTO>> | null = null;
  videoIds$ = new BehaviorSubject<string[]>([]);
  mainVideoId$ = new BehaviorSubject<string>("");
  isSideBarOpen = false;
  currentPetId$ = this.route.paramMap.pipe(
    map((params) => Number(params.get("petId") ?? 1)),
  );

  viewportHeight = signal(0);
  visibleSlidesCount = signal(0);

  ngOnInit(): void {
    this.currentPetId$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((petId) => this.initPage(petId));
  }

  initPage(id: number): void {
    this.imageService.initPetIconStorage();

    this.apiService
      .getAll<CameraCardResponseDTO>("cameras")
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (state) => {
          console.log(state);
          this.sideBarState.set(state);
          this.visibleSlidesCount.set(state.error ? 0 : 4);
          this.updateViewportHeight();
        },
      });

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

  openDonatePopUp() {
    this.popUpService.open("donate-first-step");
  }

  openMapPopUp(direction: string[]) {
    const coords = this.zoosService.parseCoordinates(direction);
    if (!coords) return;
    this.popUpService.open("map", "", coords);
  }

  ngAfterViewInit() {
    this.slides.changes
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.updateViewportHeight();
      });

    this.updateViewportHeight();
  }

  private updateViewportHeight(): void {
    requestAnimationFrame(() => {
      const firstSlide = this.slides?.first?.nativeElement;
      const height = firstSlide?.offsetHeight ?? 0;

      if (!height) {
        this.viewportHeight.set(0);
        return;
      }

      this.viewportHeight.set(height * this.visibleSlidesCount());
    });
  }
}
