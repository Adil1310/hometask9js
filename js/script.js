// 1.Создать массив из 10 чисел.
// Вывести наибольшее и наименьшее значения массивов.
let arr1 = [12, 24, 35, 47, 59, 61, 72, 84, 95, 107];
    function getMax(arr1){
        return Math.max.apply(Math, arr1);
    }
    function getMin(arr1){
        return Math.min.apply(Math, arr1);
    }

    console.log(getMax(arr1))
    console.log(getMin(arr1))

// 2.Заполнить массив из 5 чисел при помощи prompt(не смог сделать при помощи prompt).
// Вывести массив, сумму значений и среднее значение массива. 

let arr2 = [35, 47, 59, 61, 72];

function sumArr(arr2) {
    let sum = 0;
    arr2.forEach(function(item){
        sum += item
    })
    return sum;
}

let arr3 = [35, 47, 59, 61, 72, 84];

function  avgArr(arr3){
    if(arr3.length === 0)
        return 0;
    
    let sum = 0;
 
    for(let i = 0; i < arr2.length; i++) {
        sum += arr3[i];
    } 
    return sum / arr3.length;
}

console.log(sumArr(arr2))
console.log(avgArr(arr3))

// 3.Создать 2 массива из 7 чисел.
// Сравнить значения в массиве по очереди и выводить информацию в консоль 
// (сравнение производить по индексам, 0 с 0 в обоих массивах и т.д.).

let arrOne = [1, 2, 3, 4, 5, 6, 7];
let arrTwo = [7, 6, 5, 4, 3, 2, 1];

let result =
    arrOne.length === arrTwo.length &&
    arrOne.every(function(element){
        return arrTwo.includes(element);
    });

console.log(result);

// 4.Создать массив из 10 чисел.
// Сохранить во второй массив только те значения первого массива,
// которые являются четными.

let bigArr = [12, 24, 35, 47, 59, 61, 72, 84, 95, 107];

for (let i = 0; i < bigArr.length; i++)
{
  if ((bigArr[i] % 2) === 0)
  {
  	console.log(bigArr[i]);
  }
}
