import { Api } from "./../../../shared/services/api/api";
import { Component, inject } from "@angular/core";
import { Button } from "../../../shared/button/button";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { SignInRequestDTO, SignInResponseDTO } from "../../../types/auth";
import { Observable, shareReplay } from "rxjs";
import { ResponseState } from "../../../types/responseState";
import { AsyncPipe } from "@angular/common";
import { AuthService } from "../../../shared/services/auth/auth.service";
import { Router } from "@angular/router";
import { nameValidators, passwordValidators } from "../utils/validators";

@Component({
  selector: "app-sign-in",
  imports: [Button, ReactiveFormsModule, AsyncPipe],
  templateUrl: "./sign-in.html",
  styleUrl: "./sign-in.scss",
})
export class SignIn {
  private fb = inject(FormBuilder);
  private apiService = inject(Api);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginState$: Observable<ResponseState<SignInResponseDTO>> | null = null;

  form = this.fb.nonNullable.group({
    login: [ "", nameValidators],
    password: [ "", passwordValidators],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const body: SignInRequestDTO = this.form.getRawValue();
    this.loginState$ = this.apiService
      .post<SignInResponseDTO, SignInRequestDTO>("login", body)
      .pipe(shareReplay(1));

    this.initAuthUser();
  }

  initAuthUser() {
    if (!this.loginState$) return
      this.loginState$.subscribe((state) => {
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

  get password() {
    return this.form.get("password");
  }
}
