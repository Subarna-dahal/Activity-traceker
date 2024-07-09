const { genqr } = require('../../utils/qrcode');

const createqr = async (payload) => {
  const { url } = payload;
  const isValidURL = url.includes("https://");
  if (!isValidURL) throw new Error("Invalid URL");
  const result = await genqr(url);
  return result;
};

module.exports= { createqr };
