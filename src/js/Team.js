/* eslint-disable */

const chars = [];
class Team {
  setChar(...theArgs) {
    for (const obj of theArgs) {
      chars.push(obj);
    }
    return chars;
  }
  *[Symbol.iterator]() {
    for (let iter of chars) {
      yield iter
    }
  }
}


const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
const char2 = {
  name: 'Лучник2',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
const char3 = {
  name: 'Лучник3',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const first = new Team();
first.setChar(char, char2, char3);

for (const char of first) {
  console.log(char);
}
