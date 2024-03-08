document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll("ul li");

  const hrefValues = [
    "#home",
    "#about",
    "#services",
    "#Professions",
    "#craftsmen",
  ];

  liElements.forEach(function (liElement, index) {
    const aElement = document.createElement("a");
    aElement.setAttribute("href", hrefValues[index]);
    aElement.className = "nav-item";

    while (liElement.firstChild) {
      aElement.appendChild(liElement.firstChild);
    }

    liElement.parentNode.replaceChild(aElement, liElement);
  });
});
