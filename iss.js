const request = require('request');


const fetchMyIP = function (callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    const data = JSON.parse(body);

    if (error || data.ip === undefined) {
      callback(error, null);
      return
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      callback(null, data.ip);
    }
  })

}

module.exports = { fetchMyIP };