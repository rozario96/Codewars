let divisors = (value) => {
    let divisorArray = []; // initializing an empty array

    // looping through all the numbers upto the given value to find divisors
    for (let i = 2; i < value; i++) {
        if (Number.isInteger(value / i)) {
            divisorArray.push(i);
        }
    }

    // deciding whether the value is prime or have divisors
    return divisorArray.length === 0 ? `${value} is prime` : divisorArray;
}

console.log(divisors(13));