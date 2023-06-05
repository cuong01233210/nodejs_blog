const Course = require("../models/Course");

class SiteController {
  //[GET] /
  async index(req, res) {
    try {
      const courses = await Course.find(); // Retrieve all courses from the database
      res.render("home", { courses }); // Render the "home" view with the retrieved courses
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
