const PDfDoc=require('../../utils/pdf');

const createpdf=async(payload)=>{
const {image,text}=payload;
const isvalidimage=image.includes("img.png");
if (!isvalidimage) throw new Error("Invalid image");
const result=await PDfDoc(image);
return result;
}

module.exports={createpdf}