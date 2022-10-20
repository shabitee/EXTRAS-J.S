//Exercise1: Breakfast
const breakFast= ["cereal", "yam", "egg"];
breakFast.push("milk");
breakFast.unshift("water");
console.log(breakFast.length);


//Exercise2: Last Value
const topics = ["maths", "English", "Science"]
 let topic = topics[topics.length - 1];
 console.log (topic);


 //Exercise3:Music
 const musicGenre = ["Rock", "Rap"]
 musicGenre.push("Jazz");
 musicGenre.splice["Rap"]=("Classical");
 musicGenre.unshift("Blues", "Reggae")
 console.log (musicGenre);


 //Exercise4: Sort
 let myBreakFast= ["cereal", "yam", "egg"];
 myBreakFast.sort(function(a, b){return a - b});
 console.log(myBreakFast);


 //LOOPS
 //Exercise1: Counting
 const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let countdown ="";
 let start =10;

 for (start; start >=1; start--) {
    console.log (start)
 }



 //Exercise 2: Tasks
 let tasks = {
   task1: "washing", 
   task2: "Vaccum", 
   task3: "Mop"
 };
 for (let i in tasks) {
    console.log(`My Tasks are ${i+1}:${tasks[i]}`);
 }


 //Exercise3: Last Loop Value
 3

 //Exercise4: Even Numbers
 const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 for( let i =2; i<=10; i+2){
   console.log (evenNumbers);

 }
 


 //Exercise5:Replace "for"
 const num = [1, 2, 3];
 let x= 0; x++;
 while (x < 3); {
   alert(`number ${x}!`);
   console.log(i);
 }

 //Exercise6: Sum
let sum = sumInput[0] + sumInput[1] +sumInput[2];
const sumInput =[4,8,7];
console.log (sum);

//Stings
//Exercise1: Adding Full Stop
const addFullStop = "I am  a woman" + ".";
console.log (addFullStop);


//Exetcise2:Capitalize
let string1 ="I am a string";
let string2 = 2;
let allStrings = string1 ||string2;
function capitalise(string1, string2){
   if(string1 ="")
   return string1.toUpperCase
   
      
  
      
   } if(string2 !==""){
      console.log("This is not a string");
      
   
      
   } 
//For Each
//Exercise1: Favourite Foods
const favFood = [`Yam`, `Rice`, `Eba`];
favFood.forEach((item)=> { 
   console.log(item);
});

//Execise2: Sum
const numArray =[1, 2, 3, 4, 5];
function sums(arr) {
   let sum = 0;
   arr.forEach((item) => {
      sum =sum + item;
   });
   console.log(`Thesum is: $(sum)`);
}
sum(numArray);


//Exercise3:Product
function product(arr){
   let prod = 1;
   arr.forEach((item) =>{
      prod = prod * item;
   });
   return prod;
}
console.log(product(numArray));


//Exercise4:Students Grades
const studentGrades =[70, 20, 53, 64, 78, 60, 32];
function passedGrades(arr){
   alert(`Grade ${passedGrades}`);
}
function grades(callback) {
   callback(studentGrades > 50);
   return passedGrades;
}



//Join
//Exercise1: Names

//Exercise2:To CSV


//Map
//Exercise1: Miles Converter
const Kilometres =[20, 30, 40, 50];
const toMiles = Kilometres.map((score) => {
   return Maths.floor(score *0.62137);
});
console.log(toMiles);




//Reduce
//Exercise1: Sum
const numSum = numArray.reduce((total, current) =>{
   return total + current;
}, 0);
console.log(numSum);


//Exercise2: Product
const products = numArray.reduce((total, current) => {
   return total * current;
}, 1);
console.log(products);


let spaceCraft =
size=10;
range=2010;
model=1990;
capacity=20000;
console.log(range);
