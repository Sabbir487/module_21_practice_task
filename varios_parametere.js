function wantOddAndEven (num, doubleIt){
    if(doubleIt === true){
        const double = num * 2;
        console.log('even number');
        return double;
    }
    else{
        const double = num * 5;
        console.log('odd number');
        return double;
    }
}

const result = wantOddAndEven(12, true);
console.log(result);
const folafol = wantOddAndEven(12, false);
console.log(folafol);