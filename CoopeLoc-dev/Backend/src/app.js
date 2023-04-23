const express = require("express");
const cors = require("cors");
const app = express();
const port = 5400;



require("./database");
app.use(cors());
app.use(express.json());

app.get("/API-CoopeMap", (req, res) => {
  res.status(200).json({ msg: "CoopeMap API" });
});

app.use("/users", require("./routes/users.routes"));


app.listen(port, () => {
  console.log("CoopeMap API corriendo en el puerto", port);
});
