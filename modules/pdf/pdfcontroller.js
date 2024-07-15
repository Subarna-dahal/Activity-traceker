const createPDF = require('../../utils/pdf');

const documentpdf = async (payload) => {
  const { text, image } = payload;

  if (typeof text !== 'string') {
    throw new Error("Invalid or missing text");
  }

  if (typeof image !== "string" || image.trim() === "") {
    throw new Error("Invalid IMAGE PATH");
  }

  const result = await createPDF(text, image);
  return result;
};

module.exports = { documentpdf };
