var x=10;
var y=new Number(10);
console.log((x==y)); //return true bcz x==y checkes only the value not the type
console.log(x===y);//it's checks both value and at the same time they also checks for type
var z=new Number(10);
console.log(z==y);   //bcz two object can't compareable
console.log(z===y);  //bcz two object can't compareable
