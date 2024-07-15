const router = require('express').Router();
const pdfcontroller = require('./pdfcontroller');

router.get('/', (req, res) => {
  res.json("All the data are in the database");
});

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    if (id === 'subarna') throw new Error("String provided");
    res.json({ message: `We are reading ${id} from database` });
  } catch (e) {
    next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = await pdfcontroller.documentpdf(req.body);
    res.json({ data: data, message: "Posting new data" });
  } catch (e) {
    next(e);
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    data: req.body,
    message: `Updating ${id} from database`,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `Patching ${id} from database` });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Deleting ${id} from database` });
});

module.exports = router;
