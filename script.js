// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "success");
});

// #2) Run the above promise and make it console.log "success"
promise.then((result) => console.log(result));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve("success").then((res) => console.log(res));
// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch((err) => console.log(err));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4",
];
Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
  .then((res) => console.log(res))
  .catch((err) => console.log("ughh"));
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

// Solve the below problems:

// #1) Convert the below promise into async await
const fetchData = async function () {
  const res = await fetch("https://swapi.co/api/starships/9/");
  const data = await res.json();
  console.log(data);
};

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
// const urls = [
//  "https://jsonplaceholder.typicode.com/users",
//    "https://jsonplaceholder.typicode.com/posts",
//      "https://jsonplaceholder.typicode.com/albums",
//      ];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async (url) => {
        let res = await fetch(url);
        let data = await res.json();
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log(err);
  }
};

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

const cvts = (str) => {
  let times = 0;
  let newStr = str.split("");
  for (let i = 0; i < str.length - 1; i++) {
    console.log(i);
    let goAfter = newStr[i].codePointAt();
    let goBefore = newStr[i + 1].codePointAt();
    times++;
    if (goAfter > goBefore) {
      oldLetter = newStr[i];
      newStr[i] = newStr[i + 1];
      newStr[i + 1] = oldLetter;
      i = -1;
    }
  }
  console.log(times);
  return newStr.join("");
};
console.log(cvts("where"));

// console.log(cvts("we have done it finally"));
// console.log(cvts("where is the party at"));
// console.log(cvts("where"));

// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// create a function that takes in arrays as input
const roomFunction = (val = [1, "2", "3", 2, 5, 5, 6]) => {
  // sort the input from lowest to highest
  let sortedVal = val.sort((a, b) => a - b);
  // create an answer array to hold all the values to be returned
  let answer = [];
  // create an array to store numbers only
  let numbersArray = [];
  // create array to store strings only
  let stringsArray = [];
  // create a variable and store the first item inside of the array
  let compareAgainst = sortedVal[0];
  //map through the input using forEach
  sortedVal.forEach((item) => {
    //if the item == compareAgainst
    if (item == compareAgainst) {
      //push the current index to the number array
      numbersArray.push(item);
      // else
    } else {
      // check if array lenght is greater than 0, if so, do answer.push(numberArray) else do answer.push(numberArray[0])
      pushValues();
      //set compareAgainst = the current index
      compareAgainst = item;
      //set number array to [ourVariable]
      numbersArray = [item];
    }
  });

  function pushValues() {
    numbersArray.length > 1
      ? answer.push(numbersArray)
      : answer.push(numbersArray[0]);
  }
  // return anwerArray
  pushValues();
  return answer;
};

// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that,
// when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

//create a function that takes in an array
function whichNumber(array = [1, 2, 3], compare = 4) {
  //create an answer array
  let answer = [];
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    let answer = [];
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] + array[j] === compare) {
          return answer.concat(array[i], array[j]);
        }
      }
    }
  }
  //return answer array
  answer = "no match found";
  return answer;
}
