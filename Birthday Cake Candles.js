function maxVal(ar) {
  var ans = ar[0];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i] > ans) ans = ar[i];
  }
  return ans;
}

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  var counter = 0;
  var MaxValue = maxVal(ar);
  for (let i = 0; i < ar.length; i++) {
    if (MaxValue == ar[i]) counter++;
  }
  return counter;
}
