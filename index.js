// Use the pseudocode to help you write the 'countThePeople' function
let campgrounds = [
  { number: 1, view: "ocean", partySize: 8, isReserved: false },
  { number: 5, view: "ocean", partySize: 4, isReserved: false },
  { number: 12, view: "ocean", partySize: 4, isReserved: true },
  { number: 18, view: "forest", partySize: 4, isReserved: false },
  { number: 23, view: "forest", partySize: 4, isReserved: true },
];



function filterByView(campgroundsArray, viewType){
  let viewArray = [];
  for(let i = 0; i<campgroundsArray.length; i++){
    if(viewType === campgroundsArray[i].view){
      viewArray.push(campgroundsArray[i]);
    }
  }
  return viewArray;
}

function filterByAvailability(campgroundsArray){
  let available = [];
  for(let i =0; i<campgroundsArray.length; i++){
    if(campgroundsArray[i].isReserved === false){
      available.push(campgroundsArray[i]);
    }
  }
  return available; 
}

function filterByPartySize(campgroundsArray, partySize){
  let filteredArray = [];
  for(let i = 0; i<campgroundsArray.length; i++){
    if(campgroundsArray[i].partySize >= partySize){
      filteredArray.push(campgroundsArray[i]);
    }
  }
  return filteredArray;
}


//function findMyCampsites(campgroundsArray, viewType, partySize);

function findMyCampsites(campgroundsArray, viewType, partySize){
  let tempArray = filterByPartySize(filterByAvailability(filterByView(campgrounds, viewType)),partySize);
  let finalArray = [];
  for(let i =0; i<tempArray.length; i++){
    finalArray.push(tempArray[i].number);
  }
  return finalArray;
}

console.log(filterByPartySize(filterByAvailability(filterByView(campgrounds, 'ocean')),5));


console.log(findMyCampsites(campgrounds, 'ocean', 3));

//let arr = ["music", "japans", "Los Angeles, CA"];

//console.log(arr.includes('Los Angeles'));  

let x = ['ab', 'c','d'];

x.push('music')
console.log(x)

// This tests your code - you can ignore it for now!
require('./test.js');(void 0);