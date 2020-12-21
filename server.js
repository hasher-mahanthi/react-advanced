//import { image1 } from "./src/components/pages/dashBoard/carCard/images/image1.png";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
let cars = [
  {
    id: 1,
    // name: "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
    // Efficiency: 17,
    // Price: 450,
    // months: 6,
    // img: "image1.png",

    name: "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
    Efficiency: 16,
    Price: 550,
    months: 6,
    img: "image2.png",
    Charging: 50,
    Range: 135,
    Features: {
      seats: 5,
      doors: 5,
      front: "front",
      speed: "140",
      colour: "Titanium Grey",
    },
    AvailableDate: "18/12/2020",
  },
  {
    id: 2,
    // name: "Renault ZOE ZE50 R135 GT Line (rapid) 52kWh",
    // Efficiency: 17,
    // Price: 450,
    // months: 6,
    // img: "image1.png",

    name: "2020 MG ZS EV (Excite) 45kWh",
    Efficiency: 17,
    Price: 450,
    months: 6,
    img: "image2.png",
    Charging: 50,
    Range: 135,
    Features: {
      seats: 5,
      doors: 5,
      front: "front",
      speed: "140",
      colour: "Titanium Grey",
    },
    AvailableDate: "18/12/2020",
  },
  {
    id: 3,
    name: "2020 MG ZS EV Exclusive 45kWh",
    Efficiency: 17,
    Price: 480,
    months: 6,
    img: "image2.png",
    Charging: 50,
    Range: 135,
    Features: {
      seats: 5,
      doors: 5,
      front: "front",
      speed: "140",
      colour: "Titanium Grey",
    },
    AvailableDate: "18/12/2020",
  },
  {
    id: 4,
    name: "Renault ZOE 22kWh",
    Efficiency: 17,
    Price: 100,
    months: 6,
    img: "image2.png",
    Charging: 50,
    Range: 135,
    Features: {
      seats: 5,
      doors: 5,
      front: "front",
      speed: "140",
      colour: "Titanium Grey",
    },
    AvailableDate: "19/12/2020",
  },
];

app.get("/api/cars", (req, res) => {
  res.send(cars);
});

app.post("/api/createProduct", (req, res) => {
  todo = req.body.todo;
  res.send(todo);
});

const port = process.env.PORT || 5000;
app.listen(port, () => "serve at https://localhost:5000");
