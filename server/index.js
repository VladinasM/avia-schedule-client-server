const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();

async function getData(req, res){
  const data = await fetch(
		"https://api.rasp.yandex.net/v3.0/search/?apikey=bc8e601d-50c8-4b7c-8083-f2edc68b1d26&format=json&from=s9600379&to=s9600213&lang=ru_RU&page=1&date=2023-03-02"
	).then(res => res.json());
  return res.json(data);
 
}

app.get('/', getData)