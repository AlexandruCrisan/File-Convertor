const convertapi = require('convertapi')('token');
const default_path = `./FilesToBeConverted/`;
const fs = require('fs');

var final_file;

var all_the_names = [];
var index = 0;

const allFiles = fs.readdirSync(default_path);

for(const file of allFiles){
  all_the_names[index] = file;
  index++;
}
if(index == 0){
  console.log("make sure you added at least one file !");
  return 0;
}


for(var i = 0; i<index; i++){
  conv(all_the_names[i]);
}

function conv(file_name){
  
  convertapi.convert('pdf', { File: default_path + file_name })
    .then(function(result) {
      // get converted file url
    
      console.log("Converted file url: " + result.file.url);
      
      final_file = default_path + file_name.slice(0, file_name.length - 5) + ".pdf";
      console.log(final_file);

      // save to file
      return result.file.save(final_file);
    })
    .then(function(file) {
      console.log("File saved: " + file);
    })
    .catch(function(e) {
      console.log("numele si/sau extensia fisierului sunt gresite");

      process.exit(1);
  });
}