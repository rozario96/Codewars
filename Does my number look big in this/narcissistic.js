let narcissistic = (value) => {
    let toString = value.toString();
    let totalCount = 0;
    for (let i = 0; i < toString.length; i++) {
        toInt = parseInt(toString[i], 10);
        totalCount += Math.pow(toInt, toString.length);
    }
    return totalCount === value ? true : false
} 

console.log(narcissistic(15));