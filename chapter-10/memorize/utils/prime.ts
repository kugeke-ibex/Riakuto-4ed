export const getPrimes = (maxRange: number) => {
  [...Array(maxRange + 1)].slice(2).filter((n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    
    return true;
  })
}
