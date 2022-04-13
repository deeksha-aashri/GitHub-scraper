const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");
const { jsPDF } = require("jspdf");
const { log } = require("console");
function list(url){
    request(url,cb);
}
function cb(err,res,body){
    if(err){
        console.log(err);
    }
    else{
        pointers(body);
    }
}
function pointers(html){
    let selecTool=cheerio.load(html);
    let pointerElem=selecTool('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title'); // selects each issue in each repo 
                                         // console.log(pointerElem.text());
    for(let i=1;i<pointerElem.length;i++){
        let issueListItem=selecTool(pointerElem[i]).text(); // gets the title of all top issues in each project/repo. This has to be saved in pdf
         let issueListItemLink='https://github.com/'+pointerElem[i].attribs.href;  // gets the link to the issue which has to be saved in pdf
         //console.log(issueListItemLink);
        console.log("("+ i +") "+issueListItem);          // printing issue list items
    
    }
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}



module.exports={
    listFn:list
}