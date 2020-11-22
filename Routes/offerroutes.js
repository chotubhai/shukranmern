const express = require("express");
const changeLanguage = require("../util").changeLanguage;
const router = express.Router();
const { offermodal } = require("../models/offers");
const path = require("path");
const fs = require("fs");
var Busboy = require("busboy");

router.get("/getOffers", (req, res) => {
  const {lang} = req.params.lang || "en";
  offermodal
    .find({lang}, { description: 0, tnc: 0 })
    .then((offer) => {
      res.send(offer);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

router.post("/getOffersById", (req, res) => {
  const { _id,lang } = req.body;
  offermodal
    .findOne({ _id,lang })
    .then((offer) => {
      res.send(offer);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

router.post("/removeupload", (req, res) => {
  const { uid } = req.body;
  fs.unlink(path.join(__dirname, "public", uid + ".png"), (err) => {
    if (err) console.log(err);
    return res.send();
  });
});

router.post("/createOffer", (req, res) => {
  var { name, headerImg, offerImg, description, tnc, validto } = req.body;
var enOffer;

  new offermodal({
    name,
    description,
    tnc,
    headerImg,
    offerImg,
    validto,
  })
    .save()
    .then((offer) => {enOffer = offer; res.send(offer)})
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
  changeLanguage(req.body).then((body) => {
    var { name, headerImg, offerImg, description, tnc, validto } = body;
    new offermodal({
      name,
      headerImg,
      offerImg,
      description,
      tnc,
      validto,
      lang: "ar",
      ref: enOffer._id
    })
      .save()
      .then((events) => console.log(events))
      .catch((err) => {
        // res.status(403).json(err);
        console.log(err);
      });
  });
  // res.send();
});

router.post("/updateOffer", (req, res) => {
  const {
    _id,
    name,
    description,
    validto,
    headerImg,
    offerImg,
    tnc,
  } = req.body;

  offermodal
    .findOneAndUpdate(
      { _id },
      { $set: { name, description, validto, headerImg, offerImg, tnc } }
    )
    .then((offer) => {
      res.send(offer);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });


});

router.post("/deleteOffer", (req, res) => {
  const { _id } = req.body;
  offermodal
    .findAndDelete({ $or:[{_id},{ref:_id}] })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

exports.offerRouter = router;
