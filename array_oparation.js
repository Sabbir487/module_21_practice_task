function array (numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}

const simpleArray = [25, 22, 1, 3, 35, 8, 99];
const totalResult = array(simpleArray);
console.log('total result is', totalResult);