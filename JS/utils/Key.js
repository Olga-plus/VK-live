/* eslint-disable import/extensions */
import create from './utils/create.js';

export default class Key {
    constructor({small, shift, code}) { //деструктуризация
        this.code = code;// ссылается на инстанс класса
        this.shift = shift;
        this.small = small;
        this.isFnKey = Boolean(small.match(/Cntrl|arr|Alt|Shift|Tab|Back|Dael|Enter|Caps|Win/)) // используется для определения булевого значения

        if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/)) {// если нет ^ того что в регоулярном выражении
        this.sub = create('div', 'sub', this.shift); //create возвращает нам htmlEl и и записали его в свойства инстанса класса
      } else {
        this.sub = create('div', 'sub', '');
      }
      this.letter = create('div', 'letter', small);
      this.div = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code])
    }
}

//new Key({});