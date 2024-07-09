const Qrcode = require('qrcode');

const genqr = async (text) => {
  try {
    const qr = await Qrcode.toDataURL(text);
    return qr;
  } catch (error) {
    console.log('error', error);
  }
};

module.exports= { genqr };
