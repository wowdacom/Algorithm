// example 1

var strategy = {
  'Level0': function(value){
    return value
  },
  'Level1': function(value){
    return value * 0.8
  },
  'Level2': function(value){
    return value * 0.6
  },
  'Level3': function(value){
    return value * 0.4
  }
}

var calTotal = function(strage, value){
  return strategy[strage](value)
}

// example 2

var calc = {
  'add': function(num1, num2){
     return num1 + num2
  },
  'sub': function(num1, num2){
    return num1 - num2
  },
  'mul': function(num1, num2){
    return num1 * num2
  },
  'div': function(num1, num2){
    return num1 / num2
  }
}

var doCal = function (strategye, num1, num2){
  return calc[strategye](num1, num2)
}

console.log(doCal('div', 20, 4))