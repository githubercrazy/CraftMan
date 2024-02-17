document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll("ul li");

  // Example with specific href values
   const hrefValues = ["#home", "#about", "#services", "#Professions", "#craftsmen"];

  liElements.forEach(function (liElement, index) {
    const aElement = document.createElement("a");
    aElement.setAttribute("href", hrefValues[index]);
    aElement.className = "nav-item";

    // Copy over the content from <li> to <a>
    while (liElement.firstChild) {
      aElement.appendChild(liElement.firstChild);
    }

    // Replace <li> with <a>
    liElement.parentNode.replaceChild(aElement, liElement);
  });
});
