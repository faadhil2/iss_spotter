const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function (passTimes){
  for (let element of passTimes){
    const duration = element.duration;
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);

    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }

}



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});






//EARLY IMPLEMENTED CODE


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }else{
//       fetchISSFlyOverTimes(data, (error, data) =>{
//         if (error) {
//           console.log("It didn't work!", error);
//           return;
//         }else{
//           console.log('It worked! Returned flyover times:', data)
//         }
//       })
//       console.log(data);
//     }
//   })
//   console.log('It worked! Returned IP:', ip);
// });
  





