import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions = [{ value: '' }];

  title = 'ngmatdynamicinput';

  add() {
    this.questions.push({ value: '' });
  }
}
