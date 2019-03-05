import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../models/employee.module';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription;
  constructor(private formPoster: FormPoster) {}

  ngOnInit(): void {
    this.subscription = this.formPoster.getLanguages()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('get error: ', err)
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  languages = [];
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
    this.hasPrimaryLanguageError = value === 'default';
  }
}
