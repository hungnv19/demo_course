class NewController {
  index(req, res) {
    res.render('news');
  }

  //get news/:slug
  show(req, res) {
    res.send('News Detail');
  }
}

module.exports = new NewController();
