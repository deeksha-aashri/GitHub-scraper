let url="https://github.com/topics";
const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");


let {getrepoFn} = require('./EightRepos')

request(url,cb);

function cb(err,res,body){
    if(err){
        console.log(error,"err");
    }
    else{
        handleHtml(body);
         }
}
const topicPath1 = path.join(__dirname,"3d");
if (!fs.existsSync(topicPath1)) {
  fs.mkdirSync(topicPath1);
}
const topicPath2 = path.join(__dirname,"Ajax");
if (!fs.existsSync(topicPath2)) {
  fs.mkdirSync(topicPath2);
}
const topicPath3 = path.join(__dirname,"Algorithm");
if (!fs.existsSync(topicPath3)) {
  fs.mkdirSync(topicPath3);
}
 
 function handleHtml(html){
    let selecTool=cheerio.load(html);
    let anchorElem=selecTool('a[class="no-underline flex-1 d-flex flex-column"]');
   // console.log(anchorElem);
   
   for(let i=0;i<3;i++){
      // console.log(anchorElem[i]);
       let relativeLink=selecTool(anchorElem[i]).attr("href");
      // console.log(relativeLink);
       let fullLink="https://github.com"+relativeLink;
       let topicPathName=relativeLink.split("/")[2];   // gets 3d, ajax and algorithm
       console.log(topicPathName);

    console.log(fullLink);
    getrepoFn(fullLink)
    console.log("-----------------------------------------------------------------------");

   }
   
   
}
