console.log('hello');
//alert('chikkala');

//Variables
    var b='praveen';
    console.log(b);
    var someNumber =45;
    //console.log(someNumber);

    document.getElementById('sometest').innerHTML = 'hey there';
   prompt('what is your age?');
   document.getElementsByTagName('text').innerHTML='praveen tips';

   //numbers in javascript
   var num = 10;
 
   //increment num1by1
    num ++;
    console.log(num);
    //decrement numby1
    num--;
    console.log(num);
    //divide,multipuly *,remainder%
    console.log(num/6);

    //increment/decrement by any number you want
    num+=20;
    console.log(num)

    /*Functions
    1.create a function 
    2.call the function
    */

//crate 
  // function fun(){
    //    alert('this is a function');
  //  }
    //call
  // fun();

   // let's crate a function that take in a name and 
   // say hello fallowed by your name
    
     //for example
     Name:-"praveen"
    Return:"Hello praveen"
    

    function greating()
{
    var name = prompt('what is your name?')
    var Result = "Hello"+" "+name;
    console.log(Result)
}
// greating();

//how do arguments work in function?
//how do we add 2 numbers together in a function?

function sumNumbers(num1,num2){
    var Result = num1+num2;
    console.log(Result)
}
sumNumbers(2,5);

// //while loops
// var pra=0;

//   while(pra<100){
//       pra+=1;
//       console.log(pra);
//   }

//for loop
var number =0;
for(let nmber=0;number<100;number++){
    console.log(number)
}

//data types:

        let yourage =10; //number
        let youtubename = 'Bob'; //string
        let name ={first :'praveen', last: 'kumar'}//object
        let truth =false ;//boolean
        let groceries =['apple','banana','oranges']
        let random ;//undefined
        let nothing =null; //value nll


    // String in javascript(commom methods)  

    let fruit = 'banana';
    let morefruits ='banana\napple'    //new line

    console.log(fruit.length);
    console.log(fruit.indexOf('nan'));
    console.log(fruit.slice(2,6));
    console.log(fruit.toUpperCase());
    console.log(fruit.toLowerCase());
    console.log(fruit.replace('ban','143'))
    console.log(fruit.charAt(2));
    console.log(fruit[2]);
    console.log(morefruits.split(" , "));


    //Array

    let fruits =['banana','apple','orange','pineapple'];
      
    console.log(fruits[2]);
    console.log(fruits[0]);
    for(let i=0;i<fruits.length;i++){
        console.log(fruits[i]);
    }
    //array comman commands
    console.log('to string',fruits.toString);
    console.log(fruits.join('*'));

    let vegtables =['tomato','potato','ginger','chilli','beens']
    let alllgroceries = fruits.concat(vegtables);
    console.log(alllgroceries);
    console.log(alllgroceries.slice(0,5));
    console.log(alllgroceries.reverse());
    console.log(alllgroceries.sort());

    let somenumbers = [5,2,10,2,25,255,1,2,334,6];
    console.log(somenumbers.sort(function(a,b) {return a-b}));
    console.log(somenumbers.sort(function(a,b) {return b-a}));

    let emptyarry =new Array();
    for(i=0;i<10;i++){
        emptyarry.push(num)
    }
    console.log(emptyarry);





    





   