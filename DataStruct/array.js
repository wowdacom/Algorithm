// 寫成 function 或 class 都可以

class Stack {

  static add(inputArray, newItem) {
    return inputArray.push(newItem)
  }

  static remove(inputArray) {
    return inputArray.pop()
  }
}

class Queue {

  static add(inputArray, newItem) {
    return inputArray.push(newItem)
  }

  static remove(inputArray) {
    return inputArray.shift()
  }
}

//# init an array

var myArr = ["one", "two", "three"]

console.log("\n", myArr)

//# remove element with Stack
Stack.remove(myArr)

console.log("Remove element with Stack way:", myArr)

//# init an array

var myArr = ["one", "two", "three"]

console.log("\n", myArr)

//# remove element with Queue
Queue.remove(myArr)

console.log("Remove element with Queue way:", myArr)
