window.addEventListener("DOMContentLoaded",start);

function start(){
    event();
}

function event(){
    document.querySelector("#btn").addEventListener("click",getdata);
}

function getdata(){
    var search=document.querySelector("#searchtxt").value;
    var url="http://api.giphy.com/v1/gifs/search?q="+ search +"&api_key=oiIi8yNLJnCo86hKUoPOg47SQAKnsIuk&limit=7";
    
fetch(url).then(response=>{
        response.json().then(data=>{
            show(data);
        }).catch(err=>console.log("Invalid json",err));
    }).catch(err=>console.log("Error during ajax call",err));
}

function show(result){
    document.querySelector("#images").innerHTML=" ";
    for(let image of result.data){
        let url=image.images.original.url;
        create(url);
    }
}

function create(url){
    var img=document.createElement("img");
    img.src=url;
    img.border="2";
    img.className="size";
    document.querySelector("#images").appendChild(img);
}