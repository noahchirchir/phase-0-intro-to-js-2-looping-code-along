// Code your solutions in this file
// index.js

function writeCards(names, giftType) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${giftType} gift!`);
  }
 

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  