var mychange = document.getElementById("mychange");
mychange.addEventListener("click", function(){
    var myhome = document.getElementById("myhome");
    var myname = document.getElementById("myname");
    myhome.innerHTML = ` Wellcome ${myname.value} `
})