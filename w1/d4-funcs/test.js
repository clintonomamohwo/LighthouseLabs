let stdev = function(arr) {
  let n = arr.length;
  let sum = 0;
  let stddev=0;

  arr.map(function(data) {
    sum += data;
  });

  let mean = sum / n;

  let variance = 0.0;
  let v1 = 0.0;
  let v2 = 0.0;

  if (n !== 1) {
    for (let i = 0; i < n; i++) {
      v1 = v1 + (arr[i] - mean) * (arr[i] - mean);
      v2 = v2 + (arr[i] - mean);
    }

    v2 = v2 * v2 / n;
    variance = (v1 - v2) / (n - 1);
    if (variance < 0) {
      variance = 0;
    }
    stddev = Math.sqrt(variance);
  }

  return {
    mean: Math.round(mean * 100) / 100,
    variance: variance,
    deviation: Math.round(stddev * 100) / 100
  };
};

console.log(stdev([6,2,3,4,9,6,1,0,5]));