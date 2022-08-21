// https://ipfs.filebase.io/ipfs/QmUd3Nu7xyJigViChGpDdqg1NaA6xnKYjTfgkcF6Yy3LQq

document.getElementById('btn').onclick = function() {

  var picture = document.getElementById("picture");
  
  var metadata_url = document.getElementById('imagename').value,
    key_value = document.getElementById('keyvalue').value,
    img = document.createElement('img');

  fetch(metadata_url)
  .then(res => res.json())
  .then((out) => {
    var image_url = out.image;
    var secret_image_1 = out.secret_image_1;

    img.src = image_url;
    img.width = "500";
    img.height = "600";
    // document.body.appendChild(img);
    picture.src = image_url;
 
    if (key_value !== "" && secret_image_1 !== "") {
      var data = new XMLHttpRequest();
      data.open('GET', secret_image_1, true);
      
      data.onreadystatechange = function(){
          if(this.readyState == 4 && this.status==200){
              var dec = CryptoJS.AES.decrypt(data.responseText, key_value);
              var plain = CryptoJS.enc.Base64.stringify( dec );
          picture.src = "data:image/jpeg;base64,"+plain;
          }
      };
      data.send(null);
      
    };
  
  })
  .catch(err => { throw err });
  
}