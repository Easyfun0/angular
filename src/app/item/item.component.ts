import { StarWarsService } from './../star-wars.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
   }

  ngOnInit() {
  }
  onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: side});
    // const swService = new StarWarsService();
    this.swService.onSideChosen({name: this.character.name, side: side});
  }

}
