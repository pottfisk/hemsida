const dark = document.querySelectorAll(".dark");
const blue = document.querySelector(".blue"); 
if(getCookie("darkModeToggled") == "false" || getCookie("darkModeToggled") == ""){
    dark.forEach(element => {element.classList.toggle("dark");
			    });
    blue.classList.toggle("blue");
}
function toggleDark(){
    dark.forEach(element => {element.classList.toggle("dark");});
    
    blue.classList.toggle("blue");
    if(getCookie("darkModeToggled") == "true"){
	setCookie("darkModeToggled","false",2);
    }else{
	setCookie("darkModeToggled","true",2);
    }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function coolTransform(){
    let img = document.getElementById("robbanBild");
    img.style = "transform: rotate3d(0,0,0,180)";
}
