function cyclicRotation(arr, k) {
  if (arr.length === 0 || k === 0) {
    return;
  }
  const rotation = k % arr.length;
  const firstPart = arr.slice(0, arr.length - rotation);
  console.log(firstPart);
  const secondPart = arr.slice(arr.length - rotation);
  console.log(secondPart);

  const rotatedArray = secondPart.concat(firstPart);
  console.log(rotatedArray);

  return rotatedArray;
}
const inputArray = [1, 2, 3, 4, 5];
const rotationAmount = 7;
const rotatedArray = cyclicRotation(inputArray, rotationAmount);
console.log(rotatedArray);
