// example 1

// var strategy = {
//   'Level0': function(value){
//     return value
//   },
//   'Level1': function(value){
//     return value * 0.8
//   },
//   'Level2': function(value){
//     return value * 0.6
//   },
//   'Level3': function(value){
//     return value * 0.4
//   }
// }

// var calTotal = function(strage, value){
//   return strategy[strage](value)
// }

// example 2

// var calc = {
//   'add': function(num1, num2){
//      return num1 + num2
//   },
//   'sub': function(num1, num2){
//     return num1 - num2
//   },
//   'mul': function(num1, num2){
//     return num1 * num2
//   },
//   'div': function(num1, num2){
//     return num1 / num2
//   }
// }

// var doCal = function (strategye, num1, num2){
//   return calc[strategye](num1, num2)
// }

// console.log(doCal('div', 20, 4))

// example 3

// var tween = {
//   'linear': function( t, b, c, d){
//     return c * t / d + b
//   },
//   'easeIn': function( t, b, c, d){
//     return c * ( t/= d) * t + b
//   },
//   'strongEaseIn': function( t, b, c, d){
//     return c * ( t /= d) * t * t * t * t + b
//   }
// }


// var Animation = function( dom ){
//   this.dom = dom
//   this.startTime = 0
//   this.startPos = 0
//   this.endPos = 0
//   this.propertyName = null
//   this.easing = null
//   this.duration = null
// }

// Animation.prototype.start = function( propertyName, endPos, duration, easing ){
//   this.startTime = +new Date
//   this.startPos = this.dom.getBoundingClientRect()[ propertyName ]
//   this.propertyName = propertyName
//   this.endPos = endPos
//   this.duration = duration
//   this.easing = tween[ easing ];

//   var self = this
//   var timeId = setInterval(function(){
//     if ( self.step() === false) {
//       clearInterval( timeId )
//     }
//   }, 19)
// }

// Animation.prototype.step = function(){
//   var t = +new Date
//   if ( t >= this.startTime + this.duration ) {
//     this.update( this.endPos )
//     return false
//   }
//   var pos = this.easing( t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration)
//   this.update( pos )
// }

// Animation.prototype.update = function( pos ){
//   this.dom.style[ this.propertyName ] = pos + 'px'
// }

// var div = document.getElementById('ball')
// var animation = new Animation( div)

// animation.start( 'top', 300, 300, 'easeIn')

// 不為空
// 限制最小長度
// email 格式
// 手機號碼格式

var strategies = {
  'isNotEmpty': (errorMsg, value)=>{
    if( value === '' ){
      return errorMsg
    }
  },
  'minLength': (errorMsg, value, length)=>{
     if(value.length < length){
       return errorMsg
     }
  },
  'mobileFormat': (errorMsg, value)=>{
     if( !/^1[3|5|8][0-9]{9}$/.test( value ) ){
       return errorMsg
     }
  },
  'emailFormat': (errorMsg, value)=>{
     if ( !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value ) ){
       return errorMsg
     }
  }
}

var insert = function(strategy, errMsg, value1, value2){
  return strategies[strategy](errMsg, value1, value2)
}

console.log(insert('isNotEmpty', "使用者姓名不為空", ''))
console.log(insert('minLength', "密碼長度不可小於6", '0556666' , 6))
console.log(insert('emailFormat', "E-mail格式錯誤", 'wowdacom@gmail.com'))
console.log(insert('mobileFormat', "手機號碼格式錯誤", '0919566123'))