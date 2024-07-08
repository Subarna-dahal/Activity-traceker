const PDFDocument=require('pdfkit');
const fs=require('fs');

const PDfDoc=new PDFDocument();

PDfDoc.pipe(fs.createWriteStream("Document.pdf"));

PDfDoc.text("this is my pdf",100,100);

PDfDoc.image("./img.jpg",{
    fit:[250,300],
    align:"centre",
    valign:"centre",

})

PDfDoc.end();