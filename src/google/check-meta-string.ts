/**
 https://www.geeksforgeeks.org/meta-strings-check-two-strings-can-become-swap-one-string/
 Meta Strings (Check if two strings can become same after a swap in one string)
Given two strings, the task is to check whether these strings are meta strings or not. Meta strings are the strings which can be made equal by exactly one swap in any of the strings. Equal string are not considered here as Meta strings.

Input : str1 = "geeks"
        str2 = "keegs"
Output : Yes
By just swapping 'k' and 'g' in any of string,
both will become same.

Input : str1 = "rsting"
        str2 = "string
Output : No

Input :  str1 = "Converse"
         str2 = "Conserve"
 */

namespace Google.CheckMetaString {
  const testCases = [
    { inp: 'geeks', out: 'keegs', result: true },
    { inp: 'rsting', out: 'string', result: false }
  ];

  function testMetaString(st1: string, st2: string): boolean {
    if (st1.length !== st2.length) {
      return false;
    }

    const diffPos: number[] = [];
    for (let i = 0; i < st1.length; i++) {
      if (st1[i] !== st2[i]) {
        diffPos.push(i);
        if (diffPos.length > 2) {
          return false;
        }
      }
    }
    if (diffPos.length < 2) {
      return false;
    }
    const st3 = st2.substring(0, diffPos[0]) + st1[diffPos[0]] + st2.substring(diffPos[0] + 1, diffPos[1]) + st1[diffPos[1]] + st2.substring(diffPos[1] + 1);
    return st3 === st1;
  }

  for (const test of testCases) {
    const status = testMetaString(test.inp, test.out) === test.result;
    console.log(`${(status ? 'PASS' : 'FAIL')} - ${test.inp} - ${test.out} - ${test.result}`);
  }
}
