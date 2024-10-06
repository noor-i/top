// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p = document.createElement("p");
p.classList.add("paragraph");
p.textContent = "Hey, I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.classList.add("div");
div.style.backgroundColor = "pink";
div.style.border = "solid";
div.style.borderColor = "black";

const text1 = document.createElement("h1");
text1.classList.add("h1");
text1.textContent = "I'm in a div";

const text2 = document.createElement("p");
text2.classList.add("p");
text2.textContent = "ME TOO!";

div.appendChild(text1);
div.appendChild(text2);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
