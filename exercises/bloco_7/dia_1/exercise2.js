const fatorial = (n) => {
  let fat = 1;
  for (let i = n; i > 1; i -= 1) {
    fat *= i;    
  }
  return fat
}
console.log(fatorial(2));