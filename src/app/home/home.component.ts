import {Component} from '@angular/core';
import { Employee } from '../models/employee.module';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private formPoster: FormPoster) {}
  languages = ["English", "Spanish", "Other"];
  model = new Employee('', '', false, '', 'default');
  hasPrimaryLanguageError = false;

  submitForm(form: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      )
  }


  validatePrimaryLanguage(value) {
    if(value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
}
