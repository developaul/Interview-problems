function SumMultiplier(arr: number[]) {
  const sumOfAllElements = arr.reduce((acc, current) => acc + current, 0)

  const firstLargeNum = Math.max(...arr)

  const arrWithOutFirstLargeNum = arr.filter(current => current !== firstLargeNum)

  const secondLargeNum = Math.max(...arrWithOutFirstLargeNum)

  return (firstLargeNum * secondLargeNum) > (sumOfAllElements * 2)
}

console.log('SumMultiplier -> ', SumMultiplier([1, 1, 2, 10, 3, 1, 12]))