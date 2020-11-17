const express = require("express");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: "AKIAIUAGTSOYBZ7TIXCQ",
  secretAccessKey: "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",
});
const router = express.Router();
const { offermodal } = require("../models/offers");
var smtpTransport = require("nodemailer-smtp-transport");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
var Busboy = require("busboy");
const { rejects } = require("assert");

router.get("/getOffers", (req, res) => {
  offermodal
    .find({}, { description: 0, tnc: 0 })
    .then((offer) => {
      res.send(offer);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

router.post("/getOffersById", (req, res) => {
  const { _id } = req.body;
  offermodal
    .findOne({ _id })
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
    saveTo = path.join(__dirname, "public", filename);
    _filename = filename;
    file.pipe(fs.createWriteStream(saveTo));
  });
  var uuid = "";
  busboy.on("field", function (
    fieldname,
    val,
    fieldnameTruncated,
    valTruncated,
    encoding,
    mimetype
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

//not in use now 
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
        try{
        fs.unlinkSync(path.join(__dirname, "public", file));
        }catch(err){
            //donothimg
        }
        temparr[i] = data.Location;
        resolve(temparr);
      });
    });
  });
}

router.post("/createOffer", (req, res) => {
  var { name, headerImg, offerImg, description, tnc, validto } = req.body;

  //upload all file to s3


      new offermodal({
        name,
        description,
        tnc,
        headerImg,
        offerImg,
        validto,
      })
        .save()
        .then((offer) => res.send(offer))
        .catch((err) => {
          res.status(403).json(err);
          console.log(err);
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
    .findOneAndDelete({ _id })
    .then((offer) => {
      res.send(offer);
    })
    .catch((err) => {
      res.status(403).json(err);
      console.log(err);
    });
});

exports.offerRouter = router;
