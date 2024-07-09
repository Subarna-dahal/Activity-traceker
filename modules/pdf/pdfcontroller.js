const createPDF = require('../../utils/pdf');

const createpdf = async (payload) => {
  const { text, image } = payload;

  if (typeof image !== 'string') {
    throw new Error("Invalid or missing image");
  }

  const isValidImage = image.includes("./img.jpg");
  if (!isValidImage) {
    throw new Error("Invalid image");
  }

  const result = await createPDF(text, image);
  return result;
};

module.exports = { createpdf };
