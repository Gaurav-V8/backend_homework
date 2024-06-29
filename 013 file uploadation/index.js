const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Product = require("./models/Product");

mongoose
  .connect(
    "mongodb+srv://gauravvaishnav123456:JPmMEEQskm8SCIZZ@gaurav.gvokyh3.mongodb.net/file_uploadation_tmp?retryWrites=true&w=majority&appName=gaurav"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

const multerStorage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, "uploads");
  },
  filename: function (req, file, next) {
    const splitArr = file.originalname.split(".");
    const fileExtension = splitArr[splitArr.length - 1];

    // console.log(file);
    next(null, Date.now() + "." + fileExtension);
  },
});

const upload = multer({ storage: multerStorage }).single("thumbnail");

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.post("/insert_file", upload, async (req, res) => {
  try {
    const { name } = req.body;
    // console.log(req.file.filename);
    // console.log(req.body);
    const modelData = new Product({
      name,
      thumbnail: req.file.filename,
    });

    const responseData = await modelData.save();
    res
      .status(200)
      .json({ message: "data entered sucessfully", data: responseData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});

app.get("/read_data", upload, async (req, res) => {
  try {
    const responseData = await Product.find();

    const urlData = responseData.map((data) => {
      data.thumbnail = `${req.protocol}://${req.get("host")}/uploads/${data.thumbnail}`;
      return data;

    });
    console.log(urlData);
    res.status(200).json({ message: "data entered sucessfully", data: responseData });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
  
});

app.listen(5300, () => {
  console.log("server is running on port 5300");
});
