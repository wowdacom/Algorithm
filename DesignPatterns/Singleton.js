var Singleton = (()=>{
   var createNewInstance = ()=>{
       var obj = new Object({'stuffNmae': 'iphone', 'price': 100 })
       return obj
   }
   return {
      getStuffName: ()=>{
          var initName = createNewInstance()
          return initName
      }
   }
})()

function run (){
  var person1 = Singleton.getStuffName()
  var person2 = Singleton.getStuffName()
  console.log("Same instance? " + (JSON.stringify(person1) === JSON.stringify(person2)))
}

run()