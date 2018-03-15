// Drum Arrays
let kicks = [];
fillArray(kicks);
let snares = [];
fillArray(snares);
let hiHats = [];
fillArray(hiHats);
let rideCymbals = [];
fillArray(rideCymbals);

function toggleDrum(drumArray, index) {
  if (!drumArray) {
    return;
  }

  if (!isValidIndex(index)) {
    return;
  }

  drumArray = getArray(drumArray);
  drumArray[index] = !drumArray[index];
}

function clear(arrayName) {
  if (!arrayName) {
    return;
  }

  if (!isValidArrayName(arrayName)) {
    return;
  }

  arrayName = getArray(arrayName);
  arrayName.fill(false, 0, 16);
}

function invert(arrayName) {
  if (!arrayName) {
    return;
  }

  if (!isValidArrayName(arrayName)) {
    return;
  }

  arrayName = getArray(arrayName);
  arrayName.forEach(function(element, index, array) {
    array[index] = !array[index];
  })
}

///////////////////////////////////// Helper functions
function fillArray(arrayName) {
  for (let i = 0; i < 16; i++) {
    arrayName.push(false);
  }
  return arrayName;
}

function isValidIndex(index) {
  return (index >= 0) && (index <= 15);
}

function isValidArrayName(arrayName) {
  return (arrayName === 'kicks') ||
         (arrayName === 'snares') ||
         (arrayName === 'hiHats') ||
         (arrayName === 'rideCymbals');
}

function getArray(stringName) {
  switch (stringName) {
    case 'kicks':
      return kicks;
      break;
    case 'snares':
      return snares;
      break;
    case 'hiHats':
      return hiHats;
      break;
    case 'rideCymbals':
      return rideCymbals;
      break;
    default:
      return null;
      break;
  }
}
