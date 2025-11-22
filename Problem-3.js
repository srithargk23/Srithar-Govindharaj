function conditionalSeries(n) {
  const result = [];
  const limit = n % 2 === 0 ? n - 1 : n;

  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }

  return result;
}


console.log(conditionalSeries(6));
