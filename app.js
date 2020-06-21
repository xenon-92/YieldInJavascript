/**
 * YIELD
 *
 * @format
 */

// 1. Normal Scenario

function* generator() {
  yield 1; // 1st pause to the generator function it returns IteratorResult object {value:, done:}
  //since value is 1, i.e the evaluation of expression after the yield keyword and done is false as it has not completed
  //this pause is released again when generator object's next() method is called
  yield 2;
  yield 3;
}

var gen = generator();
console.log(gen.next()); //{value:1,done:false}
console.log(gen.next()); //{value:2,done:false}
console.log(gen.next()); //{value:3,done:false}
console.log(gen.next()); //{value:undefined,done:true} --> end of completion

// 2. throwing an error

function* generatorThrow() {
  yield 'soup';
  yield 'coffee';
  throw new Error('custom error thrown...');
  yield 'pizza'; // this yield is never reached
}

var genThrow = generatorThrow();
console.log(genThrow.next());
console.log(genThrow.next());
try {
  console.log(genThrow.next());//will throw error
} catch (ex) {
  console.log(ex);
}
console.log(genThrow.next()); //--> {value:undefined,done:true}

// 3. Return statement is reached

function* generatorReturn() {
  yield 'soup';
  yield 'coffee';
  return "below this line won't be executed"
  yield 'pizza'; // this yield is never reached
}

var genRet = generatorReturn();
console.log(genRet.next());
console.log(genRet.next());
console.log(genRet.next()); // to note over here the done property is true i.e {value:'below this line won't be executed',done:true}
console.log(genRet.next());


//4 another generic example

function* countSales(){
    var salesList = [4,6,9,11,45]
    for(var i=0;i<salesList.length;i++){
        yield salesList[i];
    }
}

var genSalesList = countSales();
console.log(genSalesList.next());
console.log(genSalesList.next());
console.log(genSalesList.next());
console.log(genSalesList.next());
console.log(genSalesList.next());
console.log(genSalesList.next());  //--> {value:undefined,done:true}
