// const db = require("../models");
const Workout = require("../models");

module.exports = function (app) {

  // app.get("/api/workouts", function (req, res) {
  //   Workout.find()
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

  app.post("/api/workouts",function (req,res){
      Workout.create({})
      .then(data => res.json(data))
      .catch(err => {
          res.json(err)
      })
  });

  // create workout
  // app.post("/api/workouts", (req, res) => {
  //   db.Workout.create(req.body, (err, data) => {
  //     if (err) {
  //       res.json(err);
  //     } else {
  //       res.json(data);
  //     }
  //   });
  // });
};
