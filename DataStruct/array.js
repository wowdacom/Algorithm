// 寫成 function 或 class 都可以

class Stack {

  // 如果要測試，加上 static，例如 static add(inputArray, newItem)
  add(inputArray, newItem) {
    return inputArray.push(newItem)
  }

  remove(inputArray) {
    return inputArray.pop()
  }
}

class Queue {

    add (inputArray, newItem) {
      return inputArray.push(newItem)
    }

    remove (inputArray) {
      return inputArray.shift()
    }
  }

module.exports = {
  Stack : Stack,
  Queue : Queue
}

//# test
//# init an array

// var myArr = ["one", "two", "three"]

// console.log("\n", myArr)

// //# remove element with Stack
// Stack.remove(myArr)

// console.log("Remove element with Stack way:", myArr)

// //# init an array

// var myArr = ["one", "two", "three"]

// console.log("\n", myArr)

// //# remove element with Queue
// Queue.remove(myArr)

// console.log("Remove element with Queue way:", myArr)
