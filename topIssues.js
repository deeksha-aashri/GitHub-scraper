
const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");
let {listFn}=require('./list')

function topIssuesInRepo(url){
    
    request(url,cb)
}
function cb(err, res, body){
    if(err){
        console.log(err);
    }
    else{
        issueList(body);
    }
}
function issueList(html){
    let selecTool=cheerio.load(html);
    
    let issueElem=selecTool('[data-tab-item="i1issues-tab"]');
    // let issueElem=selecTool('.tabnav-tabs [data-ga-click="Explore, go to repository issues, location:explore feed"]');

    for(let i=0;i<issueElem.length;i++){ 
      console.log('https://github.com/'+issueElem[i].attribs.href)
      listFn('https://github.com/'+issueElem[i].attribs.href)
       }
}
  
console.log("-----------------------------------------------------------------------");


    
    module.exports= {
    topIssuesFn : topIssuesInRepo}
    
