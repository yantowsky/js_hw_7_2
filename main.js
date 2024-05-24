const sum = (firstNum) => {
    return (secondNum) => {
        return firstNum + secondNum;
    }
}

console.log(sum(5)(2)); // 7
console.log(sum(7)(3)); // 10