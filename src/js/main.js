const container = document.querySelectorAll(".dark");
if(document.cookie == "toggled=true"){
    container.forEach(element => {element.classList.toggle("dark");});    
}
function toggleDark(){
    container.forEach(element => {element.classList.toggle("dark");});
    if(document.cookies == "toggled=true"){
	document.cookie="toggled=false";
    }else{
	document.cookie = "toggled=true";

    }
}
