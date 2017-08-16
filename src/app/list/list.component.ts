import { StarWarsService } from './../star-wars.service';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() characters;
  @Output()sideAssigened = new EventEmitter<{name: string, side: string}>();
  character = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadeSide = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadeSide = params.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadeSide);
      }
    );
  }
  onSideAssigened(charInfo) {
    this.sideAssigened.emit(charInfo);
  }
  ngOnDestroy() {
    this.subscription.unsubsribe();
  }
}
