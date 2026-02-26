// 123*567
// 12***67
// 1*****7
// *******

//    *
//   ***
//  *****
// *******

for (let i = 1; i <= 4; i++) {
    for (let j = 4; j >= i; j--) {
        process.stdout.write(' ')
    }
    
    for (let l = 1; l < i; l++) {
        process.stdout.write('*')
    }

     for (let l = 1; l <= i; l++) {
        process.stdout.write('*')
    }

    for (let m= 4; m >= i; m--) {
        process.stdout.write(' ')
    }

    process.stdout.write('\n')
};