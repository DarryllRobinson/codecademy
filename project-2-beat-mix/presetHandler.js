// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
  let response = [];

  if (!isValidRequest(requestType)) {
    response[0] = 400;
  } else if (!isValidIndex(presetsIndex)) {
    response[0] = 404;
  } else {
    response[0] = 200;
    if (requestType === 'GET') {
      response.push(presets[presetsIndex]);
    } else if (requestType === 'PUT') {
      presets[presetsIndex] = newPresetArray;
      response.push(presets[presetsIndex]);
    }
  }

  return response;
};

function isValidIndex(index) {
  return (index >= 0) && (index <= 15);
}

function isValidRequest(request) {
  console.log('Invalid request check: ' + request);
  return (request === 'GET') ||
         (request === 'PUT');
}

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
