// this is comment
/* another comment */
// document.write('lap lap')
// alert('message')
// var first_name = 'Abdelrouaf'
// var last_name = 'Amr'
// var full_name = first_name + ' ' + last_name
// full_name += ' Halaby'
// var age = 20
// console.log(full_name)
// console.log('He is' , age ,'years old')
// first_name = 'oofa'
// age = 21
// var success = true
// console.log(first_name, 'is good person')
// console.log(first_name, 'life in damanhour')
// console.log('next year he will be', age)
// console.log(success)



// To print two lines with one code
// var studentId = 'his name is oofa \" his number is \" = 2050'
// console.log(studentId)
// studentId = 'his name is oofa \nhis number is = 2050'
// console.log(studentId)



// to know what is the datatype of input 
// console.log(typeof(5))





// moduiles
// console.log(21 % 4)





//if u want to plus on number without know what is the number
// age ++ // age = age + 1 or // age += 1
// console.log(age)




// Check true or false
// console.log(first_name == 'oofa' , age > 18)
// console.log(first_name == 'oofa' && age > 18)
// console.log(last_name == 'amr' || age > 18)



// object
// var student = {
//     firstname : 'Ahmed',
//     lastname : 'Ebrahim',
//     age : 22
// }
// console.log(student)
// console.log(typeof(student))
// console.log(student['last_name'])





//object...
// student = {
//     first_name : "Salma",
//     last_name : "Esmail",
//     age : 35
// }
// console.log(student['first_name'])
// console.log(student.age)



// array
// var books = new Array()
// console.log(books)
// console.log(typeof(books))





// var clubs = ['Al-ahly', 'Barchlona', 'Real Madraid']
// console.log(clubs.length)
// console.log(clubs[0])





// add to array 
// clubs.push('Elzamalk')
// console.log(clubs)






//remove in array
// clubs.pop()
// console.log(clubs)




// store with pop
// var Eurpoen_club = clubs.pop()
// console.log(Eurpoen_club)
// clubs.shift('Liverpool')
// console.log(clubs)

// clubs.unshift('Manchester City')
// console.log(clubs)





//if else if
// if(age > 15){
//     console.log("play")
// }
// else if(age == 35){
//     console.log("enjoy")
// }
// else{
//     console.log('sleep')
// }





// for loop
// age = 20
// for(var i = 0; i <= 5; i++){
//     console.log(age)
//     age++
// }




// function

// function add_num(valu1, value2){

//     return valu1 + value2
// }
// let num = add_num(5, 6)
// console.log(num)
    

// Anonymous function
// const play = function(){
//     console.log("hey")
// }
// play()



// Arrow function
 
// const study = () => {
//     console.log("i can do it")
// }
// study()


// Template literal with Arrow function
// const sayHello = name => console.log(`Hello ${name}`)
// sayHello("oofa")


// var > let > const 

// var ...... without respecting the scope

// var i = 0
// for(var i = 0; i < 5 ; i++){

// }
// console.log(i + " var")


// let ...... with respecting the scope

// let j = 0
// for(let j = 0; j < 5; j++){

// }
// console.log(j + " let")



//common array method




// Reduce array method
// // for loop without you write it
// const arrayOfNum = [1, 2, 3 ,4, 5, 4]
// const sum = arrayOfNum.reduce((acc, curr) => {
//     return (acc + curr)
// }, 0)// start with add 0 to 1 and the equal add to 2 and the equal add to 3....

// console.log(sum)



// Filter method
// const randomNumbers = [5, 11, 42, 14, 39]
// const filterdArray = randomNumbers.filter(n => {
//     return n > 5
// })
// console.log(filterdArray)



// while loop
// let k = 0
// while(k < 10){
//     console.log(k)
//     k++
// }



// do while loop
// let o = 0
// do {
//     console.log(o)
//     o++
// }while(o < 0)




// For of loop
// let club = "Al-Ahly"
// for(let char of club){// you can write any word not char it just explain what it do
//     console.log(char)
// }





// For in loop the same of for of loop but it iterators over an object
// let family = {
//     father : 'Amr',
//     mother : 'Hanan',
//     sister : 'Esraa',
//     brother : 'Ahmed',
//     secondSister : 'Amal',
//     me : 'Abdelrouaf'
// }
// for(let key in family){// you can write any word not key
//     console.log(family[key])
// }





// Callback function
// const isEven = (n) => {
//     return n % 2 == 0
// }

// let printMsg = (evenFunc, num) => {
    
//     const isNumEven = evenFunc(num)
//     console.log(`The number ${num} is an even number: ${isNumEven}.`)

// }
// // pass in isEven as the callback function
// printMsg(isEven, 9)









//( Destructuring

// Array 
// let people = ['Abdelrouaf', 'Amr', 'Halaby']
// let [fn, mn, ln] = people

// console.log(ln)




// object)
// let personData = {
//     person_name : "oofa",
//     person_id : 2050
// }

// let {person_name , person_id} = personData

// console.log(person_id)






// This keyword
// const thisExam = {
//     name : 'first name',
//     secobj: {
//         name : 'second name',
//         printSec(){
//             return this.name
//         }
//     },
//     printFs(){
//         return this.name
//     },
//     ArrowExam : () => {
//         return this
//     }
// }

// console.log(thisExam.printFs())

// console.log(thisExam.ArrowExam())

// console.log(thisExam.secobj.printSec())

























// Arrow function
const num = (n) => {
    if(n % 2 == 0){
        num_type = 'even'
        return console.log('the number '+ n + ' is even')
    }
        
    else{
        num_type = 'odd'
        return console.log('number is odd')    
    }
}
num(8)



var num_type
const numType = n => {
    if(n % 2 == 0){
        num_type = 'even'
    }
    else
        num_type = 'odd'
    console.log(`the number ${n} is ${num_type}`)
      
}
numType([7])

// Template literal with Arrow function
// const sayHello = name => console.log(`Hello ${name}`)
// sayHello("oofa")



setTimeout(() => {
    console.log(num(7))
},3000)