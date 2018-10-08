
let topContainer = document.getElementById("container");
document.getElementById("container").style.background = "silver"
// document.getElementById("container").innerHTML = "top container"


// create inner div and append within main container
let divElement = document.createElement("div");
divElement.className = "divNavSection-id";

divElement.style.display = "flex"


topContainer.appendChild(divElement)

divElement.style.background = "#0099cc"
// divElement.innerHTML = "Navigation section"

divElement.style.paddingBottom = "20px"


// create ul,li elements and append within new inner div
let ulElement = document.createElement("ul")
let liElement = document.createElement("li")
let liElement2 = document.createElement("li")
let liElement3 = document.createElement("li")

// ulElement.className = "ulElement-id"

divElement.appendChild(ulElement)

ulElement.appendChild(liElement)
ulElement.appendChild(liElement2)
ulElement.appendChild(liElement3)

ulElement.style.listStyleType = "none"
ulElement.style.color = "white"

liElement.innerHTML = "HighOnCoding"
liElement.style.fontSize = "24px"

liElement2.innerHTML = "Home"
liElement2.style.fontSize = "18px"

liElement3.innerHTML = "Categories"
liElement3.style.fontSize = "18px"

liElement.style.marginLeft = "20px";
liElement.style.marginRight = "20px";

liElement2.style.marginLeft = "20px";
liElement2.style.marginRight = "20px";

liElement3.style.marginLeft = "20px";
liElement3.style.marginRight = "20px";


// Flex
ulElement.style.display = "flex";









// create second div and append within main container
let divElementBody = document.createElement("div");
divElementBody.className = "divBody-classname";

// divElementBody.style.display = "flex"

topContainer.append(divElementBody)

divElementBody.style.marginTop = "20px"
divElementBody.style.background = "silver"


divElementBody.innerHTML = "Silver Area"


divElementBody.style.paddingBottom = "20px"




// create third div and append within main container
let divElementBody3 = document.createElement("div");
divElementBody3.className = "divBody3-classname";

// divElementBody.style.display = "flex"

topContainer.append(divElementBody3)

divElementBody3.style.marginTop = "20px"
divElementBody3.style.background = "silver"


divElementBody3.innerHTML = "Silver Area"


divElementBody3.style.paddingBottom = "20px"





