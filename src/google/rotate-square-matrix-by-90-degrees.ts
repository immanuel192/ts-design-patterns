/**
 * https://www.geeksforgeeks.org/inplace-rotate-square-matrix-by-90-degrees/
   Inplace rotate square matrix by 90 degrees | Set 1
Given an square matrix, turn it by 90 degrees in anti-clockwise direction without using any extra space.
Input
 1  2  3
 4  5  6
 7  8  9

Output:
 3  6  9
 2  5  8
 1  4  7

Input:
 1  2  3  4
 5  6  7  8
 9 10 11 12
13 14 15 16

Output:
 4  8 12 16
 3  7 11 15
 2  6 10 14
 1  5  9 13
   */
namespace Google.RotateMatrix90Deg {
  const inp: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  function rotateArray(data: number[][]) {
    const n = data.length;
    const m = data[0].length;
    for (let i = 0; i < n; i++) {
      let st = '';
      for (let j = 0; j < m; j++) {
        if (st !== '') {
          st += ', ';
        }
        st += data[j][n - i - 1];
      }
      console.log(st);
    }
  }

  rotateArray(inp);
}
