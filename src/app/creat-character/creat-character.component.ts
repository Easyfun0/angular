import { StarWarsService } from './../star-wars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-character',
  templateUrl: './creat-character.component.html',
  styleUrls: ['./creat-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ];
swService: StarWarsService;
defaultName: 'Easyfunbb';
  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }
  onSubmit(submittedForm) {
    console.log(submittedForm.value);
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}
