let str = 'abcde';
alert(str[0]);
alert(str[1]);
alert(str[4]);

let firstNum = parseInt(prompt("Введите первое число:"));
let secondNum = parseInt(prompt("Введите второе число:"));

console.log(firstNum > 0 || secondNum > 0);

let age = parseInt(prompt("Введите ваш возраст:"));

if (age >= 18) {
    console.log('Совершеннолетний');
} else {
    console.log('Несовершеннолетний');
}