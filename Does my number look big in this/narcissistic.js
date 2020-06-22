let narcissistic = (value) => {
    let toString = value.toString(); // converting the given value to string

    let totalCount = 0; // initializing counter to store summed up value

    // looping through the string length to find the total count
    for (let i = 0; i < toString.length; i++) {
        toInt = parseInt(toString[i], 10); // converting the i-th character of the string to integer
        totalCount += Math.pow(toInt, toString.length); // adding the value to the counter after performing power operation
    }

    // returning the validity of the number in the form of boolean
    return totalCount === value ? true : false 
} 

console.log(narcissistic(15));