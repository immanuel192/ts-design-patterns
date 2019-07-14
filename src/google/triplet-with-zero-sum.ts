/**
 * https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/
 * Given an array of distinct elements. The task is to find triplets in array whose sum is zero.

Examples :

Input : arr[] = {0, -1, 2, -3, 1}
Output : 0 -1 1
         2 -3 1

Input : arr[] = {1, -2, 1, 0, 5}
Output : 1 -2  1
*/
namespace Google.FindTripletWithZeroSum {
  function findTriplet(inp: number[]) {
    const sortedInp = inp.sort((a, b) => a - b);
    for (let i = 0; i < inp.length - 2; i++) {
      let leftIndex = i + 1;
      let rightIndex = inp.length - 1;
      while (leftIndex < rightIndex) {
        const sum = sortedInp[leftIndex] + sortedInp[rightIndex] + sortedInp[i];
        if (sum === 0) {
          console.log(`${sortedInp[i]} , ${sortedInp[leftIndex]} , ${sortedInp[rightIndex]}`);
          leftIndex++;
          rightIndex--;
        }
        else if (sum > 0) {
          rightIndex--;
        }
        else if (sum < 0) {
          leftIndex++;
        }
      }
    }
  }

  const data = [0, -1, 2, -3, 1];

  findTriplet(data);

}
