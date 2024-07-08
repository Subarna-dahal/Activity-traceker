const router = require("express").Router();
const pdfcontroller = require("./pdfcontroller");

router.get("/", (req, res) => {
  res.json("all the data are in the database");
});

router.get("./:id", (res, req, next) => {
  try {
    const id = req.params.id;
    if (id == "subarna") throw new Error("string provided");
    res.json({ message: `we are reading ${id} from database` });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    const data = pdfcontroller.createpdf(req.body);
    res.json({ data: data, message: "Posting new data" });
  } catch (e) {
    next(e);
  }
});
router.put("./:id", (req, res) => {
  const { id } = req.params;
  res.json({
    data: req.body,
    message: `updating from the ${id} from database`,
  });
});
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `patching ${id} from the database` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: `deleting${id} from database` });
});
module.exports=router;