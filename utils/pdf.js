
const PDFDocument = require('pdfkit');
const fs = require('fs');

const createPDF = (text, image) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream("Document.pdf");
    doc.pipe(writeStream);

    doc.text(text, 100, 100);
    doc.image(image, {
      fit: [250, 300],
      align: 'center',
      valign: 'center'
    });

    doc.end();

    writeStream.on('finish', () => {
      resolve("PDF created successfully");
    });

    writeStream.on('error', (error) => {
      reject(error);
    });
  });
};

module.exports = createPDF;