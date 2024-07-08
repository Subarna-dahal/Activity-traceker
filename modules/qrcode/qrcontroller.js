const {genqr}=require('../../utils/qrcode');
const createqr=async(payload)=>{
const {url}=payload;
const isvalidURL = url.includes("https://");
  if (!isvalidURL) throw new Error("Invalid URl");
  const result = await genqr(url);
  return result;
}
module.exports={createqr};