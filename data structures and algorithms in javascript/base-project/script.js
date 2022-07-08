// // put letters of word into stack

// let reverseWord=function(wordd){
//     let word=wordd;
//     console.log(word)
//     let letters =[];
//     let rword='';

//     for (let i=0;i<word.length;i++){
//     letters.push(word[i]);
// }
// console.log(letters)
// // pop off the stack in reverse order

// for (let i=0;i<letters.length;i++){
//     rword+=letters.pop();
// }
// console.log(rword)
// if(word===rword){
//     console.log(`${word} is a palidrom.`)
// } else {
//     console.log(`${word} is not a palidrome.`)
// }}
// reverseWord(`bob`);

dataa = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

// let a=['Open','Open','Senior','Open','Open','Senior']
// const openOrSenior=(data)=>{
//    return  data.map((el)=>{
//         if(el[0]>=50 && el[1]>7){
//             return 'Senior'
//         } else {
//             return 'Open'
//         }
//     })
// }
// console.log(a)
// console.log(openOrSenior(dataa))

// if (a===openOrSenior(dataa)){
//     console.log('Good job')} else {
//         console.log('Kepp working')
//     }

// let q=[1,2,"a","b"]

// let a=[]
// function filter_list(l) {

//    for(i=0;i<l.length;i++){
//       typeof(l[i]) ==='number' ? a.push(l[i]) : console.log(`l[i] is not a number`)
//     }return a
// }

// filter_list(q)

// console.log(a);

// // sau
// function filter_list(l) {
//   return l.filter(function(v) {return typeof v == 'number'})
// }

// const openOrSenior=(data)=>data.map(([age,handicap])=>(age>54 && handicap>7) ? 'Senior':'Open')
// console.log(openOrSenior(dataa))

// const songDecoder=(song)=>{
//     return song.replace(/(WUB)+/g , ' ').trim();
// }

// console.log(songDecoder('  AWUBBWUBC   '))

// let a=[19,5,42,2,77];
// let b=[];

// function sumTwoSmallestNumbers(numbers){
//     b=numbers.sort((a,b)=>a-b)
//     return (b[0]+b[1])
// }
// console.log(sumTwoSmallestNumbers(a));

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//         break;
//       case 2:
//         name = 'Venus'
//         break;
//       case 3:
//         name = 'Earth'
//         break;
//       case 4:
//         name = 'Mars'
//         break;
//       case 5:
//         name = 'Jupiter'
//         break;
//       case 6:
//         name = 'Saturn'
//         break;
//       case 7:
//         name = 'Uranus'
//         break;
//       case 8:
//         name = 'Neptune'
//         break;
//     }

//     return name;
//   }

//   console.log(getPlanetName(3), 'Earth')
//   //https://www.youtube.com/watch?v=y-Qj4vRrwv4
//   //https://www.youtube.com/watch?v=sqRk0Ly66Ps
//   //https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

// function solution(str){
//   return str.split('').reverse().join("");
// }

// console.log(solution('world'))

// function countSheeps(arrayOfSheep) {
//   let count =0;
//   for (let i=0;i<arrayOfSheep.length;i++){
//     if(arrayOfSheep[i]===true){count++}
//   }return count
// }

// let count=0
// function getCount(str) {
//   let a =str.split('')
//   let b=['a','e','i','o','u']
//   let count=0
//   for (let i=0;i<a.length;i++){
//     console.log(a[i] +' a[i]'  )
//     for (let y=0;y<b.length;y++)
//     {
//       if (b[y]===a[i]){count++}
//       console.log(b[y]+' b[i]')
//     }
//   }return count

// }

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// console.log(getCount("abracadabra"))

// function isDivisible(n, x, y) {
//   return (n%x===0 && n%y===0) ? true : false
// }

// function makeNegative(num) {
//   return num <0 ? num:-num
// }

// function makeNegative(num) {
//   return -Math.abs(num);
// }

// const summation = n => n * (n + 1) / 2;

// function getAverage(marks){
//   let a= marks.reduce((el1,el2)=>el1+el2,0)/marks.length
//    return Math.trunc(a)
//  }

// const rps = (p1, p2) => {if(p1===p2){
//   return 'Draw!'
// } else if ( p1==='scissors' && p2==='paper'){
//   return 'Player 1 won!'}
//       else if (p1==='scissors' && p2==='rock'){
//         return 'Player 2 won!'}
//          else if (p1==='paper' && p2==='scissors'){
//            return 'Player 2 won!'}
//              else if (p1==='paper' && p2==='rock'){
//                return 'Player 1 won!'}
//                 else if (p1==='rock' && p2==='paper'){
//                   return 'Player 2 won!'}
//                    else if(p1==='rock' && p2==='scissors'){
//                      return 'Player 1 won!'}
// };

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// console.log(removeChar('eloquent'))

// count=0
// function positiveSum(arr) {

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){count=count+arr[i]}

//   }return count
// }

// console.log(positiveSum([-1,2,3,4,-5]))
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

// function repeatStr (n, s) {
//   let a=[];
//   let b=[]
//   a.push(s)
//   b.push(n)
//   if(n!==0){
//   for(let i=0;i<b[0]-1;i++) {
//     a.push(a[0])
//   }
//    return a.join('')}
//  }

//  repeatStr(5, "#")

// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// function stringToArray(string){

// 	return string.split(" ")

// }

// const a=(s)=>s.split(' ');
// <p>
// </p>

// function maps(x){
// 	let a=[]
// 	  for(let i=0;i<x.length;i++){
// 		  a[i]= x[i]*2

// 	  } return a
// 	}

// function maps(x){
// 	return x.map(n=> n * 2);
//   }
//   console.log(maps([1,2,3]))

// function maps(x){
// 	return x.map(n => n * 2);
//   }

// function hero(bullets, dragons){

// 	if (bullets>=dragons*2){
// 	  return true
// 	} else {
// 	  return false
// 	}
//    }

// function hero(bullets, dragons){
// 	return bullets >= dragons * 2
//   }

// const hero=(bullets,dragons)=> bullets >= dragons * 2;
// console.log(hero(10,5))

// function arrayPlusArray(arr1, arr2) {
// 	return [...arr1,...arr2].reduce((prev,el)=>prev+=el)
//   }

// function arrayPlusArray(...arrays) {
// 	return [].concat(...arrays).reduce((a,b) => a+b,0)
//   }

//   console.log(arrayPlusArray([1,2,3],[4,5,6],[7,8,9]))

// function century(year) {
//     return Math.floor((year + 99) / 100);
// }

// console.log(century(1901))

// var humanYearsCatYearsDogYears = function(y) {
// 	if (y == 1) return [1, 15, 15]
// 	if (y == 2) return [2, 24, 24]
// 	return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//   }
// const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
//   },0)

//   console.log(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']))

//Prime Numbers

// function isPrime(num) {
//   for (let i = 2; i * i <= num; i++)

//       if (num % i === 0)

//         return false;
//   return num > 1;
// }

// console.log(isPrime(9))

// var countBits = function(n) {

//   n=[...n.toString(2)]
//   console.log(n)
//   let count =0
//   for(let i=0;i<n.length;i++){
//     if(n[i]==1){
//       count++
//     }

//   }return count
// }
//   console.log(countBits(0))

//   //sau asa
//   countBits = n => n.toString(2).split('0').join('').length;

// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return Math.floor(a * b); }; };
// function dividedBy( b ) { return function( a ) { return Math.floor(a / b); }; };

// console.log(four())
// console.log(four(plus()))

// console.log(four(plus(nine())));
// console.log(six(dividedBy(two())));

// function digital_root(n) {
//   if(n<10){return n}else{
//   let a=n=>Number(n)
//   let b=Array.from(String(n),a).reduce((el,el1)=>el+el1,0)
//   return b
//   }}

// console.log(digital_root(1))

// a=124654567547773354
// console.log((a-1)%9+1)

// function digital_root(n) {
//   if (n < 10) return n;

//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }

// var uniqueInOrder=function(iterable){
//   let a=[]
//   iterable=[...iterable]

//   for(let i=0;i<iterable.length;i++){

//     if(a.includes(iterable[i])){

//     }else{a.push(iterable[i])}
//   }return a
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// var uniqueInOrder=function(iterable){
//   let a=[]
//   iterable=[...iterable]
//   for(i=0;i<iterable.length;i++){
//     if(a.length===0){
//       a.push(iterable[0])
//     } else{
//       if(iterable[i]===iterable[i-1]){

//       }else{a.push(iterable[i])}
//     }
//   }return a
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// let l=10
// let a=[]
// let pyramid =function(star){

//     let s='*'
//     for(let i=1;i<star;i++){
//         if(star===0){

//         }else{
//            a[0]='*'
//            a[i]=a[i-1]+'**'

//         }

//     }return a

// }

// let pyramidFinal=function(x){
//     let b=[...x]
//     let c=[]
//     let d=' '
//     for(let i=0;i<b.length;i++){
//         c[i]=d.repeat((b[b.length-1].length-b[i].length)/2)+a[i]+d.repeat((b[b.length-1].length-b[i].length)/2)

//     } return c

// }

// pyramid(l).join('\r\n')
// let final=[...a]

// console.log(pyramidFinal(final).join('\n\r'))
// let p=[]
// let st='|'
// let rr=' '
// let root=function(star){
//     for(let i=0;i<=star/2;i++){
//     if(star>=10){
//         p[i]=rr.repeat((a[a.length-1].length-1)/3)+st.repeat((a[a.length-1].length-1)/3)+rr.repeat((a[a.length-1].length-1)/3)
//     }} return p
// }

// console.log(root(l).join('\n\r'))

///////////////////////////////////////////

//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
let a = [":D", ":~)", ";~D", ":)"];
// let b=[]
// const countSmileys=((el,el1)=>el+=el1)

// console.log(countSmileys(a))
// let y=""
// console.log(typeof(y))
// function countSmileys(arr) {
//     for(let i=0;i<arr.length;i++){
//       y=y+arr[i]
//     }
//     }

//     console.log(countSmileys(a))

/////////////////////////////////////
// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// function solution(list){
//   let i=0;
//   let size=list.length-1;
//   let result =[]

//   while( i<=size){
//     let j=i;
//     while(j<size && list[j]+1===list[j+1]){
//       j+=1
//     } if(j-i>=2){
//         result.push(list[i]+'' + '-'+ list[j]+'')
//         i=j+1
//     } else{
//       result.push(list[i]+'')
//       i+=1
//     }

//   }return result.join()
// }

//  console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

/////////////////////////////////////////////////////////
//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// let aa=[[1, 2, 3, 4, 5, 6],
//  [20, 21, 22, 23, 24, 7],
//  [19, 32, 33, 34, 25, 8],
//  [18, 31, 36, 35, 26, 9],
//   [17, 30, 29, 28, 27, 10],
//   [16, 15, 14, 13, 12, 11]]

// const snail = (array) =>{
//   let finalArray = []
//   while(array.length){
//     finalArray.push(...array.shift())
//     for (var i = 0; i < array.length; i++){
//       finalArray.push(array[i].pop())
//     }
//     finalArray.push(...(array.pop() || []).reverse())
//     for (var i = array.length -1; i >= 0; i--){
//       finalArray.push(array[i].shift())
//     }
//   }
//   return finalArray
// }
// console.log(snail(aa))

// var romanToInt = function (s) {
//   const numbers = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   //console.log(numbers.I)

//   let i = 0;
//   let q = [...s];

//   let size = q.length;
//   let sum = 0;

//   while (i < q.length - 1) {
//     if (numbers[q[i]] >= numbers[q[i + 1]]) {
//       sum += numbers[q[i]];
//     } else if (numbers[q[i]] < numbers[q[i + 1]]) {
//       sum = sum + (numbers[q[i + 1]] - numbers[q[i]]);
//     }
//     i++;
//   }
//   sum += numbers[q[i]];
//   return sum;
// };

// console.log(romanToInt("MCMXCIV"));
// const cakes = (needs, has) => Math.min(
//   ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );

// https://www.codewars.com/kata/551f23362ff852e2ab000037/train/javascript

// function longestSlideDown1 (pyramid) {
// let date1=performance.now()
//   for (var i = pyramid.length - 2; i > -1; i--) {
//     for (var j = 0; j < pyramid[i].length; j++) {
//       pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);

//     }
//   }
//   let date2=performance.now()
//   let date=date2-date1
//   console.log(date)
//   return pyramid[0][0];
// }

// //or

// function longestSlideDown2 (pyramid) {
//   return pyramid.reduceRight((last,current)=>current.map(
//     (v,i)=>v+Math.max(last[i],last[i+1])
//   ))[0]
//   console.log(last,curren);
// }

// longestSlideDown1(
//   [[3],
//    [7, 4],
//    [2, 4, 6],
//    [8, 5, 9, 3]])

//    let date3=performance.now()
//    longestSlideDown2(
//     [[3],
//      [7, 4],
//      [2, 4, 6],
//      [8, 5, 9, 3]])
//     let date4 = performance.now()
//     console.log(date4 - date3)
///////////////////////////////////////////////
// function rgb(r, g, b){
//   let result = ''
//   if(r<0) {
//     r=0
//   }
//   if(g<0){
//     g=0
//   }
//   if(b<0){
//     b=0
//   }

//     if(r>255) {
//     r=255
//   }
//   if(g>255){
//     g=255
//   }
//   if(b>255){
//     b=255
//   }

//   r = r.toString(16)
//   g = g.toString(16)
//   b = b.toString(16)
//   if(r.length===1){
//     r='0'+r
//   }
//   if(g.length===1){
//     g='0'+g
//   }
//   if(b.length===1){
//     b='0'+b
//   }

//   result=r+g+b

//   return result.toUpperCase()
// }
// console.log(rgb(150,13,-2)

//////////////////////////////////////////////////////

// function moveZeros(arr) {
//   const zeros = arr.filter((elm) => elm === 0).length;
//   const result = arr.filter((elm) => elm !== 0);

//   for (let i = 0; i < zeros; i += 1) {
//     result.push(0);
//   }

//   return result;
// }

// ///sau
// var moveZeros = function (arr) {
//   return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
// };
/////////////////////////////////////
//A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.

// function removeNb (n) {
//   let a;
//   let b;
//   let result = [];
//   const gaus = sum(n);

//   for(a = 1; a<=n; a++) {
//     b = (gaus-a) / (a+1) ;
//     if(Number.isInteger(b) && b<=n) {
//       result.push([a,b]);
//     }
//   }
//   return result;
// }

// function sum(number) {
//   let array=[];
//   for(i = 1; i<=number ;i++) {
//     array.push(i);
//   }
//   const sums = array.reduce(function(acc,cur){
//     return acc+cur;
//   });

//   return sums;
// }

////sau

// function removeNb (n) {
//   var results = [];
//   for (var a = 1; a <= n; a++) {
//     var b = (n * (n + 1) / 2 - a) / (a + 1);
//     if (b % 1 === 0 && b <= n) results.push([a, b]);
//   }
//   return results;
// }

// console.log(removeNb(101))
//////////////////////////////
// function solveExpression(exp) {
//   exp = exp.replace('=','==').replace('--','+');
//   for(var i = 0; i < 10; i++){
//     if(eval(exp.replace(/\?/g,i)) && !exp.includes(i)){
//         if(!/^00+$/.test(exp.replace(/\?/g,i).split('==')[1]))  return i;
//     }
//   }
//   return -1;
// }
// console.log(solveExpression("1+1=?"));
// https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript
