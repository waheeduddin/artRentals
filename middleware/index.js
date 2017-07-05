function loggedOut(req, res, next) {

    return res.redirect('/profile');
  }
  return next();
