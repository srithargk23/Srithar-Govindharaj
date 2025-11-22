function generateSeries(n) {
  const result = [];
  for (let i = 1; result.length < n; i += 2) {
    result.push(i);
  }
  return result;
}


console.log(generateSeries(4)); 
