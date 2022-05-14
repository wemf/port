const ol = document.getElementById("menu");
const links = [
    {
      label: "Week1 notes",
      url: "/week1/index.html"
    },
    {
      label: "Week2 notes",
      url: "/week2/index.html"
    }
];

links.forEach((link) => {
    let anchor = document.createElement("a");
    let li = document.createElement("li");
    let text = document.createTextNode(link.label);
    anchor.href = link.url;
    anchor.appendChild(text);
    li.appendChild(anchor);
    ol.appendChild(li);
});
