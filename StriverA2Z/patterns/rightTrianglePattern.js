// *
// **
// ***
// ****

for(let i=0; i<=3;i++) { // column
   for(let j=0; j<=i;j++) { // J should be equal or less then I.
      process.stdout.write('*')
   }
   process.stdout.write('\n')
}