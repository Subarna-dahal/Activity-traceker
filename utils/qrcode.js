const Qrcode = require("qrcode");
const genqr = async () => {
  try {
    const qr = await Qrcode.toDataURL(text);
    return qr;
  } catch (error) {
    console.log('error')
  }
};
module.export={genqr};