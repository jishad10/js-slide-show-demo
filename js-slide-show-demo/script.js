const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;      //1 no element theke soro korte pari

//actullay slide show 3 ta ke ek tar por arekta dekanor jonno setInterval use korte hobe

setInterval(() => {
  countElements++;
  let currentElement = document.querySelector(".current");    //current class ta ke koje nicchi then oi ta show korbe
  currentElement.classList.remove("current");                //show korar por oi ta remove hoi e jabe then current class ta move korte thakbe

  if (countElements > slideshowElements.length) {            //count korbo count element ta.. sildeshow er caite count beshi hole abra 0 index theke soro hobe
    slideshowElements[0].classList.add("current");          //mani ponorai ager jaigai fe re asbe
    countElements = 1;                                       //countelements 1 theke start hobe
  } else {
    currentElement.nextElementSibling.classList.add("current");          //er porer shibling e current class ta add hocce
  }
}, 2000);
