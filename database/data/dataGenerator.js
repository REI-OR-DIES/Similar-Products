/* eslint-disable no-plusplus */
const faker = require('faker');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const url = [];
// 100 fake avatar url from faker
for (let i = 0; i < 1; i++) {
  url.push(faker.image.avatar());
}


// download 100 user photos to local image folder
for (let i = 0; i < url.length; i++) {
  // path for image storage
  const imagePath = path.join(__dirname, './images', `${i}.jpg`);
  axios({
    method: 'get',
    url: url[i],
    responseType: 'stream',
  })
    .then((response) => {
      console.log(response)
      response.data.pipe(fs.createWriteStream(imagePath));
    })
    .catch((err) => {
      console.log(err);
    });
}