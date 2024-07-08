const router=require('express').Router();
const Qrcode=require('../utils/qrcode');
const pdfroute=require('../utils/pdf');



router.use('/api/v1/qr',Qrcode);
router.use('/api/v1/pdf',pdfroute);

module.export=router;