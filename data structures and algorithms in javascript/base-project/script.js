

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


dataa=[[18,20],[45,2],[61,12],[37,6],[21,21],[78,9]]


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
let a=12;
a=13
const b=12
// b=20
// console.log(a)

var e=12
e=15
console.log(e)