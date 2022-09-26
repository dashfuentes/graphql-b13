const express = require("express");
const router = express.Router();
const fs = require("fs");
const imageToSlices = require("image-to-slices");
const request = require("request");
const axios = require("axios");

router.get("/", (req, res) => {
	return res.render("layouts/main");
});

router.post("/get-place", (req, res) => {
	const { lon, lat } = req.body;
	const todayDate = new Date().toISOString().slice(0, 10);
	const date = req.body.date ? req.body.date : todayDate;

	const uri = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=0.50&api_key=gNVY3OiQQekxdGav8oAVNkRgzbuLPEb5ylmspu34`;

	/**
	 * This function makes the crop in 9 portions of the image obtained from the Nasa API
	 * This function was created with the image-to-slices module
	 *  @returns {Object} files "returns the URLs of our images"
	 */
	const slices = () => {
		let lineXArray = [682, 1364];
		let lineYArray = [682, 1364];
		let source = "./src/public/imgs/source/main.png";
		imageToSlices(
			source,
			lineXArray,
			lineYArray,
			{
				saveToDir: "./src/public/imgs/slices",
				clipperOptions: {
					canvas: require("canvas"),
				},
			},
			function () {
				res.json({ message: "success" });
			}
		);
	};

	/**
	 * This function makes the request to the NASA API to download the image and then we chain the image cropping function
	 */
	const download = () => {
		axios
			.get(uri)
			.then((res) => {
				console.log("response from api", res);
				var data = res.data;
				var imgURL = data.url;
				return imgURL;
			})
			.then((response) => {
				console.log("second function");
				return fetchImgToDownload(
					response,
					"./src/public/imgs/source/main.png",
					function () {
						//we need to call slices fn
							slices()
					}
				);
			});
	};

	const fetchImgToDownload = (uri, filename, callback) => {
		request.head(uri, function (err, res, body) {
			request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
		});
	};

	/**
	 * This instruction executes the main function of this file
	 */
	download();
});

module.exports = router;
