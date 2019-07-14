/**
 * https://www.geeksforgeeks.org/find-largest-word-dictionary-deleting-characters-given-string/

 Find largest word in dictionary by deleting some characters of given string
Giving a dictionary and a string ‘str’, find the longest string in dictionary which can be formed by deleting some characters of the given ‘str’.

Examples:

Input : dict = {"ale", "apple", "monkey", "plea"}
        str = "abpcplea"
Output : apple

Input  : dict = {"pintu", "geeksfor", "geeksgeeks",
                                        " forgeek"}
         str = "geeksforgeeks"
Output : geeksgeeks

My approach:
- Approach 1: Any word in dictionary, if it is the answer (by deleting some chars in given string), then when counting the number of chars in booth given string and that string, each of char in the given string should equal or more than the observing one. But this approach seems not correct
- Approach 2: using 2 pointer to iterate inp[i] and st, as long as all of chars matched
 */
namespace Google.FindLargestWordInDictionaryApproach {
  function findWordMeta(st: string): { [k: string]: number } {
    return st.split('').reduce((carry, char) => {
      carry[char] = (carry[char] || 0) + 1;
      return carry;
    }, {} as { [k: string]: number });
  }

  function findWord(inp: string[], st: string) {
    const data = inp.sort((a, b) => b.length - a.length);
    const inpMeta = findWordMeta(st);
    for (let i = 0; i < data.length; i++) {
      const meta = findWordMeta(data[i]);
      const isAnswer = Object.keys(meta).reduce((carry, char) => {
        return carry && inpMeta[char] && inpMeta[char] >= meta[char];
      }, true);
      if (isAnswer) {
        return data[i];
      }
    }
    return false;
  }

  const testCases = [
    { inp: ['ale', 'apple', 'monkey', 'plea'], out: 'abpcplea', result: 'apple' },
    {
      inp: ['pintu', 'geeksfor', 'geeksgeeks',
        ' forgeek'], out: 'geeksforgeeks', result: 'geeksgeeks'
    }
  ];

  for (const test of testCases) {
    const status = findWord(test.inp, test.out) === test.result;
    console.log(`${(status ? 'PASS' : 'FAIL')} - ${test.inp} - ${test.out} - ${test.result}`);
  }
}

namespace Google.FindLargestWordInDictionaryApproach2 {
  /**
   * Return true if st2 is substring of st1
   */
  function isSubString(st1: string, st2: string): boolean {
    let index1 = 0;
    let index2 = 0;
    while (index1 < st1.length && index2 < st2.length) {
      if (st1[index1] === st2[index2]) {
        index2++;
      }
      index1++;
    }
    return index2 === st2.length;
  }

  function findWord(inp: string[], st: string) {
    const data = inp.sort((a, b) => b.length - a.length);
    for (let i = 0; i < data.length; i++) {
      if (isSubString(st, data[i])) {
        return data[i];
      }
    }
    return false;
  }

  const testCases = [
    {
      inp: ['ale', 'apple', 'monkey', 'plea'], out: 'abpcplea', result: 'apple'
    },
    {
      inp: [
        'pintu',
        'geeksfor',
        'geeksgeeks',
        ' forgeek'
      ], out: 'geeksforgeeks', result: 'geeksgeeks'
    }
  ];

  for (const test of testCases) {
    const status = findWord(test.inp, test.out) === test.result;
    console.log(`${(status ? 'PASS' : 'FAIL')} - ${test.inp} - ${test.out} - ${test.result}`);
  }
}
