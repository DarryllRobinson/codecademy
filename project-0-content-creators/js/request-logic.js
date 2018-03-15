// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  let extension = filename.match(/.*\.([^\.]*)$/)[1];

  switch (extension) {
    case 'html':
      extension = 'text/html';
      break;
    case 'css':
      extension = 'text/css';
      break;
    case 'jpg':
      extension = 'image/jpeg';
      break;
    case 'jpeg':
      extension = 'image/jpeg';
      break;
    default:
      extension = 'text/plain'
      break;
  }

  return extension;
}
