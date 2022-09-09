const isPrime = (n) => {
   for(let i = 2; i <= n / 2; i++) {
      if(n % i === 0) {
         return false
      }
   }
   return true
}
const primeDividers = n => {
   let res = []
   let start = 2
   while(start <= n) {
      if(n % start === 0) {
         if(isPrime(start)) {
            res.push(start)
         };
      };
      start++
   }
   return res.toString()
};


console.log(primeDividers(15));
console.log(primeDividers(11));
console.log(primeDividers(12));
