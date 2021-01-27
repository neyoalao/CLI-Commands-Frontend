import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CommandDetailsService {

  constructor() { }
  // using reactive form or model driven approach

  //in other to use this form group in other components, inject it into the app module providers

  //then create an instance of it in the commponents to be used in using dependency injection
  //import reactiveforms module in app modules to be able to use it in html forms
  //import matgridlistmodule
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    howTo: new FormControl('', [Validators.required, Validators.maxLength(250)]),
    platform: new FormControl('', Validators.required),
    commandLine: new FormControl('', Validators.required),
  });

  //reinitiliazes the form when after reset is called
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      howTo: '',
      platform: '',
      commandLine: ''
    });
  }
}
