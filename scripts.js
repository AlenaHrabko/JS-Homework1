// task1
// let user = prompt ('Введите Ваше имя');
// alert ('Привет, ' + user + '!');

// task2
// let number = prompt ('Введите число');
// let degree = prompt ('Степень возведения числа');
// let result = number ** degree;
// console.log(result);

// task4
// let text = 'my text';
// if (text == 'some text') {
//   text = 'another text';
//   console.log (text);
// } else {
//   text = 'some text';
//   console.log (text);
// }

// task5
// let a = 0;
// if (a == 0) {
//   a = 1;
//   console.log (a);
// } else if (a < 0) {
//   a = 'Less than zero';
//   console.log (a);
// } else if (a > 0) {
//   a*=10;
//   console.log (a);
// }

// task6
// let number = prompt('Введите число');
// if (+number < 5) {
//   let result = 0;
//   console.log(result);
// } else if (+number > 5) {
//   let result = 1;
//   console.log(result);
// }

// task7
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// if (num1 > num2) {
//   console.log('Большее число: ' + num1);
// } else if (num2 > num1) {
//   console.log('Большее число: ' + num2);
// } else if (num2 == num1) {
//   console.log('Числа равны');
// }

// task8
// let num1 = prompt('Введите первое число');
// let num2 = prompt ('Введите второе число');
// if (num1 % num2 == 0) {
//   console.log ('Первое число кратно второму');
// } else {
//   console.log ('Первое число не кратно второму');
// }

// task9 
// let score = prompt('Введите Ваш средний балл');
// if (score>=1 && score<=4) {
//   console.log('Двоечник, иди учись!');
// } else if (score>=5 && score<=8) {
//   console.log('Неплохо, но давай еще поднажмем!');
// } else if (score==9 && score==10) {
//   console.log('Ого, да ты настоящий отличник!');
// }

// task10
// let score = prompt('Балл за экзамен');
// let projectNumber = prompt('Количеств выполненных проектов');
// if (score>90 || projectNumber>10) {
//   console.log('Общий выпускной бал равен 100');
// } else if (score>75 && projectNumber>=5 && projectNumber>=1) {
//   console.log('Общий выпускной бал равен 90'); 
// } else if (score>50 && projectNumber>=2 && projectNumber>=1) {
//   console.log('Общий выпускной бал равен 75');  
// } else {
//   console.log('Общий выпускной бал равен 0');
// }

// task11
// let priceDay = 40;
// let rentDuration = prompt ('Количество дней, на которые нужно арендовать авто');
// let discount1 = 50;
// let discount2 = 20;
// if (rentDuration>=7) {
//   let rentCost = priceDay * +rentDuration - discount1;
//   console.log('Стоимость аренды составит ' + rentCost +'$');
// } else if (rentDuration>=3 && rentDuration<7) {
//   let rentCost = priceDay * +rentDuration - discount2;
//   console.log('Стоимость аренды составит ' + rentCost +'$');
// } else if (rentDuration<3 && rentDuration>=1) {
//   let rentCost = priceDay * +rentDuration;
//   console.log('Стоимость аренды составит ' + rentCost +'$');
// }
