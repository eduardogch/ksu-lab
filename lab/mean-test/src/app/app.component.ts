import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-test';
  today: number = Date.now();
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // get diagnostic() { return JSON.stringify(this.model); }
}

model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
