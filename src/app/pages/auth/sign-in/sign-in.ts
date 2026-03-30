import { Component, inject } from "@angular/core";
import { Button } from "../../../shared/button/button";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  imports: [Button, ReactiveFormsModule],
  templateUrl: "./sign-in.html",
  styleUrl: "./sign-in.scss",
})
export class SignIn {
  private fb = inject(FormBuilder);

  form = this.fb.group({
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

    console.log("Form value:", this.form.value);

    // сюда потом API
    // this.authService.login(this.form.value).subscribe(...)
  }

  get login() {
    return this.form.get("login");
  }

  get password() {
    return this.form.get("password");
  }
}
