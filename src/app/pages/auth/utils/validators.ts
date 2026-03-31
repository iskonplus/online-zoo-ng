import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

export function passwordMatchValidator(passwordKey: string): ValidatorFn {
    return (control: AbstractControl) => {
        const confirm = control.value;
        const password = control.parent?.get(passwordKey)?.value;

        if (!confirm) return null;

        return password === confirm ? null : { passwordMismatch: true };
    };
}

export const nameValidators = [
  Validators.required,
  Validators.minLength(3),
  Validators.pattern(/^[A-Za-z][A-Za-z ]*$/),
];

export const emailValidators = [
    Validators.required,
    Validators.email
];

export const passwordValidators = [
  Validators.required,
  Validators.minLength(6),
  Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/),
];