/**
 * https://www.geeksforgeeks.org/sum-of-bit-differences-among-all-pairs/
 * Sum of bit differences among all pairs
 * Given an integer array of n integers, find sum of bit differences in all pairs that can be formed from array elements. Bit difference of a pair (x, y) is count of different bits at same positions in binary representations of x and y.
For example, bit difference for 2 and 7 is 2. Binary representation of 2 is 010 and 7 is 111 ( first and last bits differ in two numbers).

Examples :

Input: arr[] = {1, 2}
Output: 4
All pairs in array are (1, 1), (1, 2)
                       (2, 1), (2, 2)
Sum of bit differences = 0 + 2 +
                         2 + 0
                      = 4

Input:  arr[] = {1, 3, 5}
Output: 8
All pairs in array are (1, 1), (1, 3), (1, 5)
                       (3, 1), (3, 3) (3, 5),
                       (5, 1), (5, 3), (5, 5)
Sum of bit differences =  0 + 1 + 1 +
                          1 + 0 + 2 +
                          1 + 2 + 0
                       = 8
 */
namespace Google.SumBitDifferent {
  const inp = [1, 3, 5];

  function getBitsDifferent(a: number, b: number) {
    let i = -1;
    let diff = 0;
    do {
      i++;
      const tempA = a >> i;
      const tempB = b >> i;
      if (((tempA) & 1) !== ((tempB) & 1)) {
        diff++;
      }
      if (tempA === 0 && tempB === 0) {
        break;
      }
    } while (i < 31);
    return diff;
  }

  let total = 0;
  for (let i = 0; i < inp.length; i++) {
    for (let j = 0; j < inp.length; j++) {
      total += getBitsDifferent(inp[i], inp[j]);
    }
  }

  console.log(`Total = ${total}`);

}
