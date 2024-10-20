function evenNumber (numbers){
    const array = [];
    for (const number of numbers){
        if (number % 2 === 1){
            array.push(number);
        }
    }
    return array;
}

const perametere = [22, 23, 2, 5, 88, 9, 44];
const result = evenNumber(perametere);
console.log('even number is', result);