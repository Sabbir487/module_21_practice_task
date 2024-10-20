function make_avg (arr, size){
    console.log(arr, size);
    let sum = 0;
    for (let i = 0; i < size; i++){
        sum += arr[i];
        
    }
    return sum / size;
}

const numbers = [12, 55, 99, 23, 23, 13];
const size = numbers.length;
const result = make_avg(numbers, size);
console.log(result);