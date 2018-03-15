const checkMillionDollarIdea = (req, res, next) => {
  const numWeeks = req.body.numWeeks;
  const weeklyRevenue = req.body.weeklyRevenue;
  const yield = numWeeks * weeklyRevenue;
  //console.log('yield: ' + yield);
  if (yield < 1000000 || !numWeeks || !weeklyRevenue || (typeof numWeeks !== 'number') || (typeof weeklyRevenue !== 'number')) {
    //console.log('kak');
    res.status(400).send();
    return false;
  } else {
    //console.log('good');
    next();
    return true;
  }
}

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
