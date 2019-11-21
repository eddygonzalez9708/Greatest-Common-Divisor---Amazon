function generalizedGCD(arr) {
  arr.sort((a, b) => a - b);

  let gcd = arr[0];

  for (let x = 1; x < arr.length; x++) {
    const nextNum = arr[x];

    if (!(nextNum % gcd === 0) || nextNum === 0) {
      gcd = 1;
      break;
    }
  }

  return gcd;
}

// Testcase 1:

console.log(generalizedGCD([2, 3, 4, 5, 6])) // 1

// Testcase 2:

console.log(generalizedGCD([2, 4, 6, 8, 10])) // 2