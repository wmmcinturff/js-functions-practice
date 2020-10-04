// CALCULATE AGE DOG YEARS //
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    return ageInDogYears;
};

  const dogAge = calculateAgeInDogYears(22)
    console.log(dogAge);
 // Exploration Tasks //
 // 1.Remove the return statement and see what happens. RETURNS 'UNDEFINED'

 // Specify the number 22 as input to the function and see what the output is. 
 // 3.142857142857143
 // Change the parameter to age instead of ageOfPerson and see what happens. Then see if you   can resolve any issues that it causes. Returns undefined - never called/read; change back or change in code so it's read. 
 // Remove const dogAge = so that you just invoke the function, but don't store what it returns and see what happens. Returns as 'not defined'; getting rid of console.log returns nothing at all. 

 // BEST IN SHOW PRACTICE //
const favoriteBreed = (dogBreed) => { 
    if (dogBreed === `schnauzer`) {
        return `My favorite dog Breed is ${dogBreed}`;
    } else if (dogBreed === `meow`) { 
        return `I like cats`;
    } else {
        return `I like unusual pets`;
    }
};
  const myFavoriteBreed = favoriteBreed(`turtle`);
  console.log(`When it comes to pets, ${myFavoriteBreed}`);


// ADDITION //
 const add = (num1, num2) => {
   return num1 + num2;
 };
  console.log (add (7,6));
 const addThree = (num1, num2, num3) => num1 + num2 + num3;
  console.log(addThree(17, 4, 11))
  console.log(addThree(4, 17, 11))
  // EXPLORATION -  //
// Changing the order did not affect sum (associative property) - eliminating params changes output.
  
// SELF-DRIVING CARS //
const go = (direction, speed) => {
 if (speed > 75) {
    return `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
 } else {
    return `The car is moving ${direction} at ${speed} mph.`
 };
};
console.log(go('in circles', 99));
//=> I wanted to keep it simple so one could input any vector combo//

// EVENS OR ODDS
numArray = [ 14, 27, 36, 89, 120 ];
const evenOrOdd = (num) => {
    if (num % 2 == 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
} 
console.log(evenOrOdd(88));
// FOR...OF EXPLORATION TASK //
for (const element of numArray) {
    evenOrOdd(element);
};

// DOUBLE FUNCTIONS //
const words = [
    "The", "killing", "complex", "houses", "married", "kittens", 
    "and", "single", "soldiers", "and", "their", "kleptomaniacal",
    "families"
];


const startsWithK = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].startsWith('k')) {
        array.splice(i, 1);
      }
    }
  };
  const wordsWithK = startsWithK(words);
//(return/store in variable)NOTE: Tried .filter first//
const stringBuilder = (array) => {
    return array.join(' ');
  };
  stringBuilder(words);
  console.log(stringBuilder(words));
 
// YOU CAN TUNE A PIANO, BUT YOU CAN'T... //
   // FUNCTION TO GENERATE RANDOM # FOR SVEN between 0 and 100:
   const catchSuccess = Math.random() * 100;
   console.log(catchSuccess);
   
   const svenTunaSuccess = () => {
     if (catchSuccess >= 67) {
       return 'Sven hooked a tuna! :)';
     } else {
       return 'Sven came up empty-handed. :(';
     }
   };
   console.log(svenTunaSuccess());
   
   //mult by 0 = always empty-handed.Researced - by definition, 'pure' functions are supposed to have same input, same output. Math.random produces variable output. 


// FAST FOOD (MULTIPLE PARAMS) //
const fastFood = (sandwich, side, drink, dessert) => {
return  {
    sandwich: sandwich,
    side: side,
    drink: drink,
    dessert: dessert,
};
};
const mealOrder = fastFood(`Ultimate Slammer`,`Potato wedges`, `Mr. Pepper`, `Fudge sundae`);

console.log(mealOrder);

/*//Exploration Tasks
What happens if you define more parameters than arguments?
I added another param "entree"- shifted objects and left one as 'undefined'
What happens if you change the order of your parameters? Mutated/changed objects - sides and drinks switched.
What happens if you change the order of your argument values when you invoke the function? Same thing - sides and drinks switched. If you input like in the example, that happens anyway because the dessert and side should be switched.
What happens if you remove one of your parameters? Removed the object when printing to console. */

// SAME CHORES, DIFFERENT DAYS //
const object = {
    firstName: 'Mr.',
    lastName: 'Bean',
};
  
  const chore1 = () => 'made the bed'
  const chore2 = () => 'dressed Teddy'
  const chore3 = () => 'tidied the kitchenette'
  const chore4 = () => 'got petrol'
  const chore5 = () => 'posted a letter'
  const chore6 = () => 'shined his shoes'
  
  const choreObject = (object, chore6) => `${object.firstName} ${object.lastName} ${chore6}`

  console.log (choreObject(object, chore6()));
  
  const lazyDay = (chore2, person, day) => `${person.firstName} ${person.lastName} ${chore2} on ${day}`
   console.log (lazyDay(chore2(), object, 'Sunday'));
   
   const dayPlanner = (chore3, chore4, chore5, person, day) => `On ${day}, ${person.firstName} ${person.lastName} ${chore3}, and ${person.firstName} ${person.lastName} ${chore4}, and ${person.firstName} ${person.lastName} ${chore5}.`
 
  console.log(dayPlanner(chore3(), chore4(), chore5(), object, 'Wednesday'));
  