

let url = 'https://ipfs.filebase.io/ipfs/QmUd3Nu7xyJigViChGpDdqg1NaA6xnKYjTfgkcF6Yy3LQq';

fetch(url)
.then(res => res.json())
.then((out) => {
  var image_url = out.image;
  document.write("image_url: ", image_url);
})
.catch(err => { throw err });