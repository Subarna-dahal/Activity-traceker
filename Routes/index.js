const router=require('express').Router();
const Qrcode=require('../modules/qrcode/qrcoderoute');
const pdfroute=require('../modules/pdf/pdfroutes');



router.use('/api/v1/qr',Qrcode);
router.use('/api/v1/pdf',pdfroute);

module.exports=router;