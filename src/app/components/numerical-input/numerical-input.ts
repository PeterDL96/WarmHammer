import { Component, Input } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormGroup, FormsModule , Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-numerical-input',
  imports: [ReactiveFormsModule, InputNumber, FormsModule ],
  templateUrl: './numerical-input.html',
  styleUrl: './numerical-input.scss'
})
export class NumericalInput {
  @Input({required: true}) label!: string;
  @Input({required: true}) id!: string;
  @Input({required: true}) value!: number;
  @Input() prefix!: string;

  exampleForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.exampleForm = this.fb.group({
      value: [undefined, Validators.required]
    });
  }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}
