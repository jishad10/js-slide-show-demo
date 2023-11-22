const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;  //value golo reke dicche
  selectBgColor.value = bgColor;
  mainElement.style.fontSize = fontSize;  //then main er sathe add ko re dicches
  mainElement.style.backgroundColor = bgColor;
};


// load LocalStorage Value  ....mani reload korle ki hobe 

const initialSetup = () => {
  const bgColor = localStorage.getItem("bgColor");  //local-S theke value golo nibe
  const fontSize = localStorage.getItem("fontSize");

  if (bgColor && fontSize) {
    setValues(fontSize, bgColor);  //2 tai thakle oi golo pass ko re di be mani reload korle jate ey golo thake
  }
  if (!bgColor && !fontSize) {
    setValues("16px", "aqua");    //ar na thakle ey golo dekabe
  }
  if (!bgColor && fontSize) {
    setValues(fontSize, "aqua");
  }
  if (bgColor && !fontSize) {
    setValues("16px", bgColor);
  }
};


// changeFontSize
const changeFontSize = (event) => {
  const selectedFontSize = event.target.value;      //je font-size ta select hobe tar value ta nibo
  mainElement.style.fontSize = selectedFontSize;   //main er modde ey ta apply hobe
  localStorage.setItem("fontSize", selectedFontSize);  //then localstorage o value ta ke set ko re rakbod
};


// changeBgColor
const changeBgColor = (event) => {
  const selectedBgColor = event.target.value;
  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};


// clearLocalStorage
const clearLocalStorage = () => {
  localStorage.removeItem("bgColor");   //reset korle bgclor & fontsize ta remove ko re dichi
  localStorage.removeItem("fontSize");
  setValues("16px", "aqua");    //setvalues er value golo pass ko re dicchi setvalues function er modde jate reset korle ey value golo dekai 
};

// add event listeners
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

initialSetup();
