let links = document.getElementsByClassName("nav-link");
let target = "";
for (let i =0; i<links.length; i++){
    links[i].addEventListener("click",function(e){
        terget = e.target.innerHTML;
    })
}