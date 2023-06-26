var express = require("express");
var router = express.Router();
var baseController = require("../models/players");

router.post("/add-player", async (req, res) => {
  data = req.body;
  baseController.create(data, (err, playerResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: playerResponse,
    });
  });
});

router.post("/update-player", (req, res) => {
  let data = req.body;
  baseController.findOneAndUpdate(
    { _id: req.body._id },
    data,
    (err, updatedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedPlayer,
      });
    }
  );
});

router.post("/find-player", (req, res) => {
  baseController.find({ _id: req.body._id }, (err, playerDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: playerDetails,
    });
  });
});

router.post("/delete-player", (req, res) => {
  baseController.findOneAndRemove(
    { _id: req.body._id },
    (err, deletedPlayer) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedPlayer,
      });
    }
  );
});

router.get("/find-all-players", (req, res) => {
  baseController.find({}, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-player-centuries-95", (req, res) => {
  baseController.find({ Centuries: 95 }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-right-hand-players", (req, res) => {
  baseController.find(
    { BattingStyle: "Right-Handed" },
    (err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: allPlayersDetails,
      });
    }
  );
});
router.get("/get-left-hand-players", (req, res) => {
  baseController.find(
    { BattingStyle: "Left-Handed" },
    (err, allPlayersDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: allPlayersDetails,
      });
    }
  );
});

router.get("/get-player-name-by-Virat", (req, res) => {
  baseController.find({ Name: "Virat" }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

router.get("/get-players-fifties-70", (req, res) => {
  baseController.find({ Fifties: 70 }, (err, allPlayersDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allPlayersDetails,
    });
  });
});

module.exports = router;
