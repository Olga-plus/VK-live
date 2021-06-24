/* eslint-disable import/extensions */
import create from './utils/create.js';

export default class Key {
    constructor({small, shift, code}) { 
        this.code = code;
        this.shift = shift;
        this.small = small;
        this.isFnKey = Boolean(small.match(/Cntrl|arr|Alt|Shift|Tab|Back|Dael|Enter|Caps|Win/)) 

        if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {
        this.sub = create('div', 'sub', this.shift); 
      } else {
        this.sub = create('div', 'sub', '');
      }
      this.letter = create('div', 'letter', small);
      this.div = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code])
    }
  }