const express = require("express");
const router = express.Router();
const fs = require("fs"),
  path = require("path");
const AWS = require("aws-sdk");
const changeLanguage = require("../util").changeLanguage;
const { eventsmodal } = require("../models/events");

router.get("/getEvents", (req, res) => {
  eventsmodal
    .find({}, { description: 0, tnc: 0 })
    .then((offer) => {
      res.send(offer);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

router.post("/getEventsById", (req, res) => {
  const { _id } = req.body;
  eventsmodal
    .findOne({ _id })
    .then((Events) => {
      res.send(Events);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

function uploadArrtos3(arr) {
  return new Promise((resolve, reject) => {
    let temparr = [];
    arr.forEach((file, i) => {
      const fileContent = fs.readFileSync(path.join(__dirname, "public", file));
      const params = {
        Bucket: "shukranclone",
        Key: file, // File name you want to save as in S3
        Body: fileContent,
      };
      s3.upload(params, function (err, data) {
        if (err) {
          throw err;
        }
        try {
          fs.unlinkSync(path.join(__dirname, "public", file));
        } catch (err) {
          //donothimg
        }
        temparr[i] = data.Location;
        resolve(temparr);
      });
    });
  });
}

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

  //upload all file to s3
  // uploadArrtos3(headerImg).then((arr) => {
  //   headerImg = arr;

  //   uploadArrtos3(offerImg).then((arr2) => {
  //     offerImg = arr2;

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
    console.log(body)
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
  console.log(req.body);
});
//   });
//   // res.send();
// });

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
});

router.post("/deleteEvent", (req, res) => {
  const { _id } = req.body;
  eventsmodal
    .findOneAndDelete({ _id })
    .then((event) => {
      res.send(event);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

exports.eventsRoute = router;
