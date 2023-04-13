console.log("dt");

//in js we can change data types of values
var a='srinithi';
a=10;
console.log(a)


//in js we can declare var variable more than one time

var name="sri";
console.log(name);
var name="nithi";
console.log(name);

//var is global scope
var b1=34;
console.log(b1);
{
    var b1=10;
}
console.log(b1);

//data types of numbers
let a1=Infinity;
console.log(typeof(a1))

// Number Datatype:
let aa=10;
console.log(typeof(aa));

let c=1/10;
console.log(typeof(c));

let b=10.5;
console.log(typeof(b));

let d='hello'/1;
console.log(typeof(d));

let e=Infinity;
const f=(a,b) =>a+b;
console.log(f(3,4));




//strings

let s1="Sri, ";
let s2="Good morning";
console.log("Hello "+ s1+s2)

//backtrick operator

let back=`hello ${s1}`;
console.log(back);


//undefined--->value is not assigned

//object--creation,deletion,mutation

let o1={
    name:'srinithi',
    age:20,
    school:"NMHSS",
    "user name":"sd"
}

//printing  only keys of object
console.log(Object.keys(o1));
//printing  only values of object
console.log(Object.values(o1));

console.log(o1.name);
o1.name="sri"; // or o1["name"]="viji"
console.log(o1.name);

console.log(o1);
//to delete a element in a object
delete o1.name;
console.log(o1);



//when an object is declared as freeze, we cannot modify it's value
let o2=Object.freeze({
    a:"freeze"
})

console.log(o2)

//object MUTATION
const ob3={
    name:"KEC",
    location:"Perundurai"
}

// const ob4=ob3;
// ob4.name="Nandha";

// //both output will be same , as it will be reflected in ob3 also
// // to avoid this use {} or using triple dot(...)
// console.log("after Mutation ob4.name : "+ob4.name);
// console.log("after Mutation ob3.name : "+ob3.name);

const ob4={ob3};

ob4.name="Nandha";

console.log("after Mutation ob4.name : "+ob4.name);
console.log("after Mutation ob3.name : "+ob3.name);

const ob5={
    ...ob3,
    age:"8"
}

console.log(ob5);
console.log(ob3);


//functions
//== checks only value
//=== checks both value and data type

function isValidEmail(email='abc@gmail.com'){
    if(email==='abc@gmail.com') return true;
    return false;
}

console.log(isValidEmail());

//IIFE immediate invoking function expression

console.log((function isValid(email='abc@gmail.com'){
    if(email==='abc@gmail.com') return true;
    return false;
})())


const ismail=(email)=>{
    if(email==='abc@gmail.com')
    return true;
    return false;
    
}

console.log("ans="+ismail('jied'))



//array ---> insert,delete
//array---in js it is heterogenous
const arr=[1,'viji',true,()=>0,null,undefined]

console.log(arr)
console.log(arr[1])
console.log(arr[3]())



//to add at front--unshift
arr.unshift('abc');
console.log(arr)

//to delete at first--shift
arr.shift()
console.log(arr)

//to add element at a particular index--three parameters
//first=starting index of which insertion sholud perform
//second=how many elements should be deleted
//third,etc=elements to be inserted
//output=[1,2,10,11,12,13,5,6]

const array=[1,2,3,4,5,6]
array.splice(2,2,10,11,12,13);
// array.splice(2,3);
console.log(array)


//to add at last--push
arr.push("last")
console.log(arr)  

//to delete at last--pop
arr.pop()
console.log(arr)

//add 6 till 10 and splice the 1st 4 numbers
const ar2=[1,2,3,4,5]

//using splice
ar2.splice(5,0,6,7,8,9,10)
console.log(ar2)
ar2.splice(0,4)
console.log(ar2)

// //using push
// ar2.push(6,7,8,9,10)
// console.log(ar2)


const users=[
    {
    id:'1',
    name:'KEC',
    age:20
    },
    {
        id:'2',
        name:'suba',
        age:22
    },
    {
    id:'3',
    name:'viji',
    age:23
    },
    {
        id:'4',
        name:'sri',
        age:24
    } ,   
    {
    id:'5',
    name:'nithi',
    age:20
    }
]


//find returns only one element, whereas filter returns a set of array


const filter_user=users.filter((user)=>user.age===20);
const finnd=
console.log(filter_user)


//sending function as parameter 
//higher order function
const add=(a,b)=>a+b;

const cal=(n1,n2,op)=>{
    return op(n1,n2)
}

console.log("higher order function--cal :"+cal(3,4,add))


//task
//random number between 1 to 100
let x=Math.floor((Math.random()*100)+1);
console.log(x);
// Function to generate random number
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
  
console.log("Random Number between 1 and 5: ")
  
// Function call
console.log( randomNumber(1, 5) );





//ITERATING OBJECTS IN JS
for(let i in users){
    console.log(i.id)
}

//set interval to print from 1 to 5 with an interval of 3 second

console.log("set interval to print from 1 to 5")

// setInterval(() => {
//     for(let i=1;i<6;i++){
//         console.log(i)
//     }
// }, 3000);


var i=1;
const t=setInterval(() => {
    console.log(i++)
    if(i==3){
        clearInterval(t)
    }
    
}, 3000);



//MAP function
var arrr=[1,2,3,4,5]

//output:[2,4,6,8,10]
//without MAP
// var res=[]
// arrr.forEach((a)=>{
//     res.push(a*2)
// })
// console.log(res);

//With MAP
// var res=arrr.map((a)=>{
//     return a*2
// })
// console.log(res);
//if one parameter remove the brackets to make it easier
var res=arrr.map(a=>a*2);
console.log(res);



var ar=[1,2,3,4,5,6,7,8,9,10]
//output:[4,8,12,16,20]
var r=ar.filter((a)=>a%2==0).map((a)=>{
    return a*2;
})
console.log(r);

//Destructuring
var r1=["viji","dharani","avanthika","madhu"]
var [aaa,bb,cc,dd]=arr 
console.log(cc);
// var[a2,...rest]=r1
// console.log(a2)


//promise
var myPromise=new Promise((resolve,reject)=>{
    // output:50
   // resolve(50) 
    //Error 50
    //reject(50)
   // setTimeout(()=>reject(20),2000)
   setTimeout(()=>resolve(20),2000)
})
var myPromise=new Promise((resolve,reject)=>{
    
myPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log('error',err);
}).finally(()=>{
    console.log('finally');
})
//this will execute 1st 
console.log('main');

})


//FETCH
// fetch('url')
// .then(response=>response.json())
// .then(json=>console.log(json))

