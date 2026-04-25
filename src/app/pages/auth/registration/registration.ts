import { AuthService } from "./../../../shared/services/auth/auth.service";
import { Component, inject } from "@angular/core";
import { Button } from "../../../shared/button/button";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import {
  emailValidators,
  nameValidators,
  passwordMatchValidator,
  passwordValidators,
} from "../utils/validators";
import { Observable, shareReplay } from "rxjs";
import { ResponseState } from "../../../types/responseState";
import {
  RegistrationRequestDTO,
  RegistrationResponseDTO,
} from "../../../types/auth";
import { Api } from "../../../shared/services/api/api";
import { Router } from "@angular/router";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-registration",
  imports: [Button, ReactiveFormsModule, AsyncPipe],
  templateUrl: "./registration.html",
  styleUrl: "./registration.scss",
})
export class Registration {
  private fb = inject(FormBuilder);
  private apiService = inject(Api);
  private authService = inject(AuthService);
  private router = inject(Router);

  registrationState$: Observable<
    ResponseState<RegistrationResponseDTO>
  > | null = null;

  form = this.fb.nonNullable.group({
    login: ["", nameValidators],
    name: ["", nameValidators],
    email: ["", emailValidators],
    password: ["", passwordValidators],
    confirmPassword: ["", passwordMatchValidator("password")],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const body: RegistrationRequestDTO = this.form.getRawValue();
    this.registrationState$ = this.apiService
      .post<RegistrationResponseDTO, RegistrationRequestDTO>("register", body)
      .pipe(shareReplay(1));

    this.initAuthUser();
  }

  initAuthUser() {
    if (!this.registrationState$) return;
    this.registrationState$.subscribe((state) => {
      if (!state.data) return;

      const token = state.data.data.access_token;
      const user = state.data.data.user;

      this.authService.setAuth(token, user);
      this.router.navigate(["/"]);
    });
  }

  get login() {
    return this.form.get("login");
  }
  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
