import { AsyncPipe } from '@angular/common';
import { Component, Input } from "@angular/core";
import { Button } from "../../../../shared/button/button";
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { ResponseState } from "../../../../types/responseState";
import { FeedBackResponseDTO } from "../../../../types/feedback";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: "app-our-user",
  imports: [Button, RouterLink, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: "./our-user.html",
  styleUrl: "./our-user.scss",
})
export class OurUser {
  @Input() feedBackData: Observable<ResponseState<FeedBackResponseDTO>> | null = null;
}
