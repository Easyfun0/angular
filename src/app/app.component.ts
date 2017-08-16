import { Component } from '@angular/core';
import { random } from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'EASYB';
  rootItems = ['Apples', 'Bananas', 'Melons'];
  number = 0;

  onItemWasAdded(newItem) {
this.rootItems.push(newItem);
console.log(this.rootItems);
  }

  onNameChanged(newName) {
  this.rootName = newName;
  }
onIncrease() {
// this.number = this.number * 2;
this.number =   random(1, 1000);
}
}
