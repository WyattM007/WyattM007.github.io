// Change Variable
let stylemode = document.cookie;

// Changer Variable
let stylelink = document.getElementById('style');

// Conditional Branch with Else Branch
if (stylemode == 'dark') {
    // Change the href property of the 'link'
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    stylemode = 'light'
    document.cookie = 'light';
}
// document.cookie = 'light'

// Common Event
function switchmode() {
    // Conditional statment with Else Branch 
    if (stylemode == 'light') {
       stylemode = 'dark'
       document.cookie = 'dark'
    stylelink.href = 'css/dark.css';

    } else {
        stylemode = 'light';
    stylelink.href = 'css/light.css';
    document.cookie = 'light';

}
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons')
    if ( toolbarbuttons.style.display == 'block') {
        toolbarbuttons.style.display = 'none'
    }
    else{
        toolbarbuttons.style.display = 'block'
    }
}


function showSlides() {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
