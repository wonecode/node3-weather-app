const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=13f1fe90af765fb6b5782328b1b7174b&query=${latitude},${longitude}`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather services.", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. Il fait ${body.current.temperature}°C, au ressenti ${body.current.feelslike}°C.`
      );
    }
  });
};

module.exports = forecast;
