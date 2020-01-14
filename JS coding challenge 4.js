const sumFromNumber = number => {
  return Math.abs(number).toString().split('').reduce(function(currentSum, currentValue) {
      return currentSum + parseInt(currentValue);
    }, 0);
}

const calculateValidationNumber = input => {
  const sum = sumFromNumber(input);

  if (sum >= 10) {
    return calculateValidationNumber(sum);
  } else {
    return sum;
  }
}

console.log(calculateValidationNumber(444444));

console.log(calculateValidationNumber(1234));

console.log(calculateValidationNumber(23478998));
