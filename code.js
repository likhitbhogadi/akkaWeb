let btn=document.querySelector("#mode");
let body = document.querySelector("body");
let section = document.querySelector(".section");
let blog = document.querySelectorAll(".blog");
let comments = document.querySelector(".comments");
let modeIcon = document.querySelector(".modeIcon");
let state=0;
let link = document.querySelector("#link");
function toggle(){
    if(state==0){
        link.setAttribute('href','dark.css');
        btn.innerText="Dark Mode";
        modeIcon.src ="https://cdn-icons-png.flaticon.com/128/6932/6932837.png";
        state=1;
    }
    else{
        link.setAttribute('href','style.css');
        btn.innerText="Light Mode ";
        modeIcon.src = "https://cdn-icons-png.flaticon.com/128/8637/8637690.png";
        state=0;
    }
}

let like1 = document.querySelector("#like1");
let flag=0;
like1.addEventListener("click", ()=>{
    if(flag==0){
        like1.innerText="Remove Like";
        flag=1;
    }
    else{
        like1.innerText="Add Like ";
        flag=0;
    }
})

let like2 = document.querySelector("#like2");
let flag2=0;
like2.addEventListener("click", ()=>{
    if(flag2==0){
        like2.innerText="Remove Like";
        flag2=1;
    }
    else{
        like2.innerText="Add Like";
        flag2=0;
    }
})