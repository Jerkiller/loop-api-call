
const dates = [
  "2022-05-20T01:00:00.000Z","2022-05-20T02:00:00.000Z","2022-05-20T03:00:00.000Z",
];

const newDates = [
  "2022-05-30T00:00:00.000Z","2022-05-30T01:00:00.000Z","2022-05-30T02:00:00.000Z",
];

const baseUrl = 'http://localhost:8080/api/StatisticsFunctionPregressAsync?from=';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// you need to add "async" keyword to your function
// to use async/await functionality
async function callAPI() {

  for (let index = 0; index < newDates.length; index++) {

      // use try/catch for error handling
      try {
          var date = newDates[index]; //get the artist name in the array
          console.log('calling ', date); //print the artist name

          // call synchronously and wait for the response
          await fetch(baseUrl+date)

      } catch (error) {
          console.error(error);
      }
  }
}

callAPI();