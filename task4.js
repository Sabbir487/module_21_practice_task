function count_zero(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === '1'){ 
            sum++;
        }
    }
    return sum;
}

const arrayy = '100110100';
const result = count_zero(arrayy);
console.log(result);