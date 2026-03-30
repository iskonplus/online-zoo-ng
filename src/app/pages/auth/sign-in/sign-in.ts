import { Api } from "./../../../shared/services/api/api";
import { Component, inject } from "@angular/core";
import { Button } from "../../../shared/button/button";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { SignInRequestDTO, SignInResponseDTO } from "../../../types/auth";
import { Observable, shareReplay } from "rxjs";
import { ResponseState } from "../../../types/responseState";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-sign-in",
  imports: [Button, ReactiveFormsModule, AsyncPipe],
  templateUrl: "./sign-in.html",
  styleUrl: "./sign-in.scss",
})
export class SignIn {
  private fb = inject(FormBuilder);
  private apiService = inject(Api);
  loginState$: Observable<ResponseState<SignInResponseDTO>> | null = null;

  form = this.fb.nonNullable.group({
    login: [
      "",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-Za-z][A-Za-z ]*$/),
      ],
    ],
    password: [
      "",
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/),
      ],
    ],
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
  }

  get login() {
    return this.form.get("login");
  }

  get password() {
    return this.form.get("password");
  }
}
