function twoSum(array, sum) {
  const output = []
  const hashmap = {}
  for (let num of array) {
    // let num = array[i]
    let addend = sum - num
    // see if addend exists in hashmap
    // if exists, add solution to output
    if (hashmap[addend]) {
      output.push([num, addend])
    }
    // add array num into hashmap
    hashmap[num] = true
  }

  return output
}

export { twoSum }