import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  standalone: false,
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0),
  // });

  public myForm!: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.myForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3) ] ],
      price: [0, [ Validators.required, Validators.min(0) ] ],
      inStorage: [0, [ Validators.required, Validators.min(0) ]],
    })
  }

  onSave(): void {

    if (this.myForm.invalid) return;

    console.log(this.myForm.value)
  }

}
