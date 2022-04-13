const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");


let {topIssuesFn} = require('./topIssues');



 function getrepo(url){
  request(url,cb);
}
function cb(err,res,body) {
    if (err) {
        console.log(err);
    }
    else {
        repolink(body);
    }
}
function repolink(html){
    let selecTool=cheerio.load(html);
    let repoElem=selecTool('.text-bold.wb-break-word');

   for(let i=0;i<8;i++){
       let url ='https://github.com/'+repoElem[i].attribs.href
       console.log(url)
     topIssuesFn(url)
   }
   }
  console.log("-----------------------------------------------------------------------");




module.exports = {

    getrepoFn:getrepo
}
