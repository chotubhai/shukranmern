const express = require("express");
const router = express.Router();
const changeLanguage = require("../util").changeLanguage;
const { eventsmodal } = require("../models/events");

router.get("/getEvents", (req, res) => {
  const lang = req.params.lang || "en";
  eventsmodal
    .find({ lang }, { description: 0, tnc: 0 })
    .then((offer) => {
      res.send(offer);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

router.post("/getEventsById", (req, res) => {
  const { _id, lang } = req.body;
  eventsmodal
    .findOne({ _id, lang })
    .then((Events) => {
      res.send(Events);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

router.post("/createEvent", (req, res) => {
  var {
    name,
    headerImg,
    offerImg,
    description,
    tnc,
    validto,
    location,
  } = req.body;

  new eventsmodal({
    name,
    description,
    tnc,
    location,
    headerImg,
    offerImg,
    validto,
    lang: "en",
  })
    .save()
    .then((events) => res.send(events))
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });

  //make an entry of ar lang of same event entry
  changeLanguage(req.body).then((body) => {
    console.log(body);
    var {
      name,
      headerImg,
      offerImg,
      description,
      tnc,
      validto,
      location,
    } = body;
    new eventsmodal({
      name,
      headerImg,
      offerImg,
      description,
      tnc,
      validto,
      location,
      lang: "ar",
    })
      .save()
      .then((events) => console.log(events))
      .catch((err) => {
        // res.status(403).json(err);
        console.log(err);
      });
  });
});

router.post("/updateEvents", (req, res) => {
  const {
    _id,
    name,
    description,
    validto,
    headerImg,
    offerImg,
    tnc,
    location,
  } = req.body;

  eventsmodal
    .findOneAndUpdate(
      { _id },
      {
        $set: {
          name,
          description,
          validto,
          location,
          headerImg,
          offerImg,
          tnc,
        },
      }
    )
    .then((Events) => {
      res.send(Events);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
  changeLanguage(req.body).then((body) => {
    var {
      name,
      description,
      validto,
      headerImg,
      offerImg,
      tnc,
      location,
    } = body;
    eventsmodal
      .findOneAndUpdate(
        { ref: _id },
        {
          $set: {
            name,
            description,
            validto,
            location,
            headerImg,
            offerImg,
            tnc,
          },
        }
      )
      .catch((err) => {
        res.status(403).json(err);
        console.log(err);
      });
  });
});

router.post("/deleteEvent", (req, res) => {
  const { _id } = req.body;
  eventsmodal
    .findAndDelete({ $or: [{ _id }, { ref: _id }] })
    .then((event) => {
      res.send(event);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

exports.eventsRoute = router;
