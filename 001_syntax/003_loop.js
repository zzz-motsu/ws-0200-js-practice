/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let i = 0; i <= 10; i ++){
  console.log(i);
  }
}

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  for (let i = 10; i >= 0; i --){
    console.log(i);
  }
}

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let x = 0;
  while (x <= 10) {
    console.log(x);
    x += 1;
  }
}

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  let x = 10;
  while (x >= 0) {
    console.log(x);
    x -= 1;
  }
}

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
