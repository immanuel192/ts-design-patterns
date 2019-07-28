from typing import List


def findTriplet(inp: List[int]):
    sortedInp = [*inp]
    sortedInp.sort()
    i = -1
    while i < len(inp)-2:
        i += 1
        currentNum = sortedInp[i]
        leftIndex = i+1
        rightIndex = len(inp)-1
        while leftIndex < rightIndex:
            sum = sortedInp[leftIndex]+sortedInp[rightIndex]+currentNum
            if sum == 0:
                print("{}, {}, {}".format(currentNum,
                                          sortedInp[leftIndex], sortedInp[rightIndex]))
                leftIndex += 1
                rightIndex -= 1
            elif sum > 0:
                rightIndex -= 1
            elif sum < 0:
                leftIndex += 1


data = [0, -1, 2, -3, 1]
findTriplet(data)
