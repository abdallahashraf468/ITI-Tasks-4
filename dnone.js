var myname = document.getElementById("myname");
var hidden = document.getElementById("hidden");

hidden.addEventListener("click", () => {
    myname.classList.add("d-block");
    myname.classList.toggle("d-none");
})