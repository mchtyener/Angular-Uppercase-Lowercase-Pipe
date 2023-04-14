import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: UntypedFormGroup;

  constructor() {
  }

  ngOnInit() {
    this.data = new UntypedFormGroup({
      name: new UntypedFormControl(null, [Validators.required]),
      email: new UntypedFormControl(null, [Validators.required, Validators.email])
    })
  }

  get form() {
    return this.data.controls;
  }


  submitForm() {
    console.log('FORM DATA =>>> ', this.data.value);
  }


}
