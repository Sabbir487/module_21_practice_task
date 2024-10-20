function condition (numbers){
    console.log(numbers);
    let pushHere = [];
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 1){
            const multi = numbers[i] * 5;
            pushHere.push(multi);
        }
        else{
            const devide = numbers[i] / 3;
            pushHere.push(devide.toFixed(2));
        }
    }
    return pushHere;
}

const arrayy = [23, 44, 55, 66, 3, 4];
const result = condition(arrayy);
console.log(result);