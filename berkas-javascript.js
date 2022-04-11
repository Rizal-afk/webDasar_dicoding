const links = document.querySelectorAll("header a");

for (const link of links) {
  link.addEventListener("click", function(event){
    event.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
}