let btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  let img = document.createElement("img");
  let body = document.querySelector("body");
  img.setAttribute(
    "src",
    "https://plus.unsplash.com/premium_photo-1723385420649-4f3648adecb7?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  img.style.left = Math.random() * 1000 + "px";
  img.style.top = Math.random() * 1000 + "px";

  body.appendChild(img);
});
