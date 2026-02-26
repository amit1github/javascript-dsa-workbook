// *** ****
// 1** ***1
// 12* **12
// 123 *456

// *******
//  *****
//   ***
//    *

for (let i = 1; i <= 4; i++) {
    for (let l = 1; l < i; l++) { // running this on i2
     process.stdout.write(" ")
    }

    for (let j = 4; j > i; j--) {
      process.stdout.write('*')
    } 

    for (let j = 4; j >= i; j--) {
      process.stdout.write('*')
    }

    for (let l = 1; l < i; l++) {
     process.stdout.write(" ")
    }

    process.stdout.write('\n')
};