//            "Loops"

/* Loops are used to execute a specific block of code a specific number of times. There are 2 types of loops in TypeScript which are Definite Loop (for), and Indefinite Loops (while, do..while) */

//            "For Loop"

// The for loop is used to execute a particular block of code for a specific number of times, which is defined by a specific conditional statement. This is a traditional for loop that we’ve been studying everywhere and using all the time.
// Syntax: for(Initialization; Condition; Updation) {
//    ...
// }
// Initialization: statement executes before loop starts, and it initializes the iteration variable to a particular value, which is used to terminate the loop after certain iterations.
// Condition: statement contains the termination condition which defines when the loop should stop. It is very important because an incorrect condition might cause the loop to continue forever!
// Updation: statement is executed at the end of each iteration. It updates the value of the iteration variable. It is done so that the iteration variable reaches a value that falsifies the iteration condition thereby terminating the loop.
// Example: Here, let i =10; is the Initialization statement that initializes an iteration variable i with an initial value of 10. The i < 15; is the condition that is checked before each iteration and i++; is the updation statement that increments the iteration variable i by +1 after each iteration.

for(let i = 0; i < 5; i++ ){
    console.log("Thank you sir Asharib, sir Ubaid, sir Naeem");
};

// Example 2: In this example, we’ll create an array of some elements, and we will access each element of the array using the for loop.

let animals = ["cat", "dog", "lion", "wolf", "deer"];

    for(let i = 0; i < animals.length; i++) {

        // Prints i-th element of the array
        console.log(animals[i]);
    };

//             "For Of Loop"

// This is another type of for loop in Typescript that works in a different way. It operates on an iterable objects like arrays, lists, etc. It iterates each element of the iterable and assigns it to the iteration variable. So, there’s no need to write the traditional way of for loop if we want to access elements of an iterable. We can instead use for..of loop.

// Syntax: for (initializer of collection) {
//    ...
// }

// Example: Here, the elements of the array animals are accessed one by one and are stored in the iteration variable i. So, i store the element of the array at a particular iteration, so we don’t need to access array elements manually. Also, the loop executes the same number of times as the length of the array, so we didn’t even have to worry about the termination condition.

for (let i of animals){
    console.log(i);
};

// The for..of loop is useful when we just want the elements of an iterable (array, list, tuple), and we don’t have to worry about the index of the elements inside the array.

//              "For In Loop"

// for…in loop: The for..in loop works in a similar way as that of for..of loop, but instead of assigning the array elements to the iteration variable, the elements’ indices are assigned, so we get the element index at each iteration which can be further used to access individual array elements or perform necessary operations that require index instead of array elements.

//Syntax: for (initializer in collection) {
//    ...
// }

for (let i in animals){
    console.log(i, animals[i]);

};

// Example: Here, i is the iteration variable, that gets assigned to of the indices of the array one by one, starting from the first index that is 0 and going all the way up to the last index of the array which in this case is 4. The condition and updation are managed automatically by JavaScript.

//              "While Loop"

// In JavaScript, you can create a while loop using the while keyword followed by a condition. The loop continues to execute as long as the specified condition evaluates to true.

// Syntax: while (condition) {
//   // Code to be executed while the condition is true
//    // The condition is checked before each iteration
// }

let i = 5;
while (i <= 10) {
    console.log(i);
    i++;
};
// Entry Controlled loops: In this type of loop, the test condition is tested before entering the loop body. For Loop and While Loops are entry-controlled loops.

//             "Do While Loop"

// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// Exit Controlled Loops: In this type of loop the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. the do-while loop is exit controlled loop.
// Syntax: do {
//    // Statements
// }
//while(conditions)

let test = 1;
do {
  console.log(test);
  test++;
} while (test <= 10);

// Note: When we are writing conditions for the loop we should always add a code that terminates the code execution otherwise the loop will always be true and the browser will crash.