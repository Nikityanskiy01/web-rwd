const seventhLab = () => {
    // Задание 1. Приготовление сэндвичей
const countSandwiches = function (bread, cheese) {
    let counter = 0;
    while (bread > 0 && cheese > 0) {
      bread--;
      bread--;
      cheese--;
      counter++;
    }
    console.log(`Вы можете приготовить ${counter} сэндвичей`);
  };
  
  countSandwiches(10, 5);
  
  // Задание 2. Таблица умножения
  function generateMultiplicationTable(number) {
    // Создаем и выводим каждую строку таблицы умножения
    for (let index = 1; index <= number; index++) {
      let row = "";
      for (let nestedIndex = 1; nestedIndex <= number; nestedIndex++) {
        row += `${index * nestedIndex}\t`;
      }
      console.log(row);
    }
  }
  
  generateMultiplicationTable(10);
  
  // Задание 3. Цитата в рамочке
  const showQuote = function (words, symbol) {
    const max = Math.max(...words.map(word => word.length)); 
    const frame = symbol.repeat(max + 4);
  
    console.log(frame);
    words.forEach(word => {
      console.log(`${symbol} ${word}${' '.repeat(max - word.length)} ${symbol}`)
    });
    console.log(frame);
  };
  
  showQuote(['Hello', 'World', 'In', 'JS'], '#');
  
  
  // Задание 4. Объединение массивов
  const mergeArrays = function (arr1, arr2) {
    let merged = [];
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (i < arr1.length) merged.push(arr1[i]);
      if (i < arr2.length) merged.push(arr2[i]);
    }
    console.log(merged);
  };
  
  mergeArrays([1, 3, 5], [2, 4, 6, 7, 8, 9, 10]);
  
  // Задание 5. Счетчик уникальных значений массива
  const countUniqueValues = function (arr) {
    let obj = {};
    for (let el of arr) {
      if (obj[el]) {
        obj[el]++;
      } else {
        obj[el] = 1;
      }
    }
    console.table(obj);
  };
  
  countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5]);
  
  // Задание 6. Бургер-меню на странице
  
  // Задание 7. Toast на странице
}

export default seventhLab