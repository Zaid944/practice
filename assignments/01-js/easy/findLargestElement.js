/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (biggestNumber < numbers[i]) {
            biggestNumber = numbers[i];
        }
    }
    return biggestNumber;
}

module.exports = findLargestElement;
