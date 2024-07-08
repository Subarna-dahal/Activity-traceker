const router = require("express").Router();

const QRController = require("./qrcontroller");
router.get("/", (req, res) => {
  res.json({ msg: "All the data are in the database" });
});

router.get("/:id", (res, req, next) => {
  try {
    const id = req.params.id;
    if (id == "subarna") throw new Error("string provided");
    res.json({ msg: `we are reading ${id} from database` });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await QRController.createqr(req.body);
    res.json({ data: data, msg: "posting new data" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (res, req) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `Updating ${id}from database` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req, body, msg: `PATCHING ${id}from database` });
});

router.delete("/:id", (res, req) => {
  const { id } = req.params;
  res.json({ msg: `deleting${id} fro, database` });
});
module.export = router;
