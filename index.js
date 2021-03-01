const convertapi = require('convertapi')('zFrNRK89Ja3Osmdj');
const path = `./FilesToBeConverted/`;
const readline = require('readline');
const fs = require('fs');







const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

var completed_path = "";
var file_name = "";
var file_ext_in = "";
var file_ext_ult = ".pdf";
var path_without_ext = '';
var final_path = "";
var finp = "";

var toate_nume = [100];

var i = 0;

let temp = fs.readdirSync(path);

temp.forEach((f) => {
  file_name = f;
})

final_path = path + file_name;

conv();

function conv(){
  convertapi.convert('pdf', { File: final_path })
    .then(function(result) {
      // get converted file url
      

      console.log("Converted file url: " + result.file.url);

      
      finp = path + file_name.slice(0, file_name.length - 5) + ".pdf";
      console.log(finp);

      // save to file
      return result.file.save(finp);
    })
    .then(function(file) {
      console.log("File saved: " + file);
      process.exit(1);
    })
    .catch(function(e) {
      console.log("numele si/sau extensia fisierului sunt gresite");

      process.exit(1);
  });
}





///////////////////////////////////////////////////////////////////////////////////////

/*rl.question('nume? ', (answer) => {
  file_name = answer;

  rl.question('extensie? ',(answer2) => {
    file_ext_in = answer2;
    function path_maker () {
      var local_path;
        
      path_without_ext = path + file_name;
      local_path = path_without_ext + file_ext_in;
        
      return local_path;
    }
    completed_path = path_maker();
  
    convertapi.convert('pdf', { File: completed_path })
    .then(function(result) {
      // get converted file url
      console.log("Converted file url: " + result.file.url);
  
      // save to file
      return result.file.save(path_without_ext + file_ext_ult);
    })
    .then(function(file) {
      console.log("File saved: " + file);
    })
    .catch(function(e) {
      console.log("numele si/sau extensia fisierului sunt gresite");
      process.exit(1);
    });
    rl.close();

  })
  
});
  

    
    

    

    
  


//readline.question('extensie : ', file_ext_in);

//console.log("numele fisierului : ");
//readline(file_name);
//console.log("extensie : ");
//readline(file_ext_in);*/


