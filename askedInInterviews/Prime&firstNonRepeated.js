// Find the first non-repeated character in a string.
// Find prime numbers between 1-100.

// function firstNonRepeatedChar(char) {
//     const charMap = {};

//     for(let str of char) {
//         charMap[str] = (charMap[str] || 0) + 1;
//     }

//     console.log(charMap)
//     let incr = 0;
//     for(let str of char) {
//         if (charMap[str] === 1) {
//             incr++;
//             if (incr === 2) {
//                 return str; // second non-repeating char
//             }
//         }
//     }

//     return false
// }
// console.log(firstNonRepeatedChar('aabbbcdde'))

function printPrimeNumbers() {
  for (let num = 1; num <= 100; num++) {
    let isPrime = true;

    if (num <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      console.log(num);
    }
  }
}

printPrimeNumbers();