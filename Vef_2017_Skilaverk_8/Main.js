//1. 
/*
for lúppa leifir þér að keyra í gegnum færslum í array, á meðan þú veist hversu oft þú vilt keyra í gegnum þann array

for-Each lúppa leyfir þér að keyra í gegnum value-in af propertíunum í ákveðnu object

for-in lúppa leyfir þér að keyra í gegnum properties af ákveðnu object

for-of lúppa leyfir þér að keyra í gegnum "iteratable" objecta, og var það búið til að koma í stað fyrir for-in og for-each lúppur
*/

//2.
/*
var	divs	=	document.getElementsByTagName('div');	
for	(var	i	=	0,	div;	div	=	divs[i];	i++)	
{
	console.log(divs[i].innerHTML);		
}
*/


//3. Template literals er haft inn í `` þessum þarna, og með þeim er hægt að halda utan um placeholders
/*
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
*/

//4.
/*
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"
*/


//5. Class í Javascript er önnur leið að define-a class object og er hægt að nýta sér prototype til að gera það. Þannig að class er önnur leið til að búa til object constructor, og prototype er önnur leið, sem er hægt að blanda á sams tíma.

//6. Closures er að vísa í inner function, það er, þegar function er búið til í öðru function, og umhverfið sem það function sjálft getur starfað í. 
/*
function init() { //býr til function init
  var name = 'Mozilla'; // býr til variable name
  function displayName() { // displayName() er closure, það er, innra function, sem getur vísað í allt sem er til í ytra function-inu
    alert(name); // notar variable name sem var skilgreint í init
  }
  displayName();    
}
init();
*/

//7. Argument object-ið er variable í flestum functions sem heldur utan um öll arguments sem fara inn í function-ið eins og array(en er samt ekki array þannig séð)
/*
function dæmi(a,b)
{
	console.log(arguments[0]); //þetta myndi birta fyrsta argument-ið sem function-ið hefur, þ.e a
}
*/

//8. fun.bind(thisArg[, arg1[, arg2[, ...]]])

//9. Promise er proxy fyrir value sem er ekki endilega vitað af þegar promise-ið er búið til. Þetta er gert til að koma í veg fyrir að gefa undir eins value, frekar svo hægt er að gefa value-ið seinna, undir ákveðnum kringumstæðum
