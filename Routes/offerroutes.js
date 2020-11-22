const express = require("express");
const changeLanguage = require("../util").changeLanguage;
const router = express.Router();
const { offermodal } = require("../models/offers");
const path = require("path");
const fs = require("fs");
var Busboy = require("busboy");

router.get("/getOffers", (req, res) => {
  const lang = req.query.lang;
  console.log(lang);
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

router.post("/upload", (req, res) => {
  // console.log(req.headers);
  var busboy = new Busboy({ headers: req.headers });
  let _filename;
  let saveTo;

  busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
    saveTo = path.join(__dirname, "public",filename);
    _filename = filename;
    file.pipe(fs.createWriteStream(saveTo));
  });
  var uuid = "";
  busboy.on("field", function (
    fieldname,
    val,
  ) {
    uuid += val;
  });
  busboy.on("finish", function () {
    fs.renameSync(
      path.join(__dirname, "public", _filename),
      path.join(__dirname, "public", uuid + ".png")
    );
    res.send({ name: "xxx.png", status: "done" });
  });
  return req.pipe(busboy);
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
