import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
 private characters = [
      { name: 'Easyfun', side: ''},
      { name: 'Easyplay', side: ''}
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }
    onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }
  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
