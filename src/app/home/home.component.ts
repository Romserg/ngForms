import {Component} from '@angular/core';
import { Employee } from '../models/employee.module';
import { el } from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ["English", "Spanish", "Other"];
  model = new Employee('Darla', 'Smith', true, 'w2', 'default');
  hasPrimaryLanguageError = false;
  validatePrimaryLanguage(value) {
    if(value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }
}
