const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss_promised');

const printPassTimes = function (passTimes){
  for (let element of passTimes){
    const duration = element.duration;
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);

    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
.then((passtimes) => {
printPassTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});
