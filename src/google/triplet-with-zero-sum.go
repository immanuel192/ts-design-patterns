/**
https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/
 * Given an array of distinct elements. The task is to find triplets in array whose sum is zero.

Examples :

Input : arr[] = {0, -1, 2, -3, 1}
Output : 0 -1 1
         2 -3 1

Input : arr[] = {1, -2, 1, 0, 5}
Output : 1 -2  1
*/
package main

import (
	"fmt"
	"sort"
)

func findTriplet(inp []int) {
	sortedInp := inp[0:len(inp)]
	sort.Ints(sortedInp)
	for i := 0; i < len(sortedInp)-2; i++ {
		currentNum := sortedInp[i]
		leftIndex := i + 1
		rightIndex := len(sortedInp) - 1
		for leftIndex < rightIndex {
			sum := currentNum + sortedInp[leftIndex] + sortedInp[rightIndex]
			if sum == 0 {
				fmt.Println(fmt.Sprintf("%d , %d , %d", currentNum, sortedInp[leftIndex], sortedInp[rightIndex]))
				leftIndex++
				rightIndex--
			} else if sum > 0 {
				rightIndex--
			} else if sum < 0 {
				leftIndex++
			}
		}
	}
}

func main() {
	data := []int{0, -1, 2, -3, 1}
	findTriplet(data)
}
