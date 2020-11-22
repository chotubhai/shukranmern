const translate = require("google-translate-open-api").default;
const { htmlToText } = require("html-to-text");

exports.changeLanguage = (body) => {
  return new Promise(async (resolve) => {
    const tempbody = {};
    var keys = Object.keys(body);
    //continue if arr

    for (var key= 0 ;key < keys.length;key++) {
      if (typeof body[key] == "object") continue;
      const result = await translate(htmlToText(body[keys[key]]), { to: "ar" });
      tempbody[keys[key]] = result.data[0].split("").reverse().join("");
    }
    resolve(tempbody);
  });
};
