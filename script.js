const menuButton1=document.getElementById("menu-button1");
const menuButton2=document.getElementById("menu-button2");
const menu1=document.getElementById("menu1");
const menu2=document.getElementById("menu2");

menuButton1.addEventListener("click",function()
{
    menu1.classList.toggle("show");

}
)

menuButton2.addEventListener("click",function()
{
    menu2.classList.toggle("show");

}
)


/* ..................this is for tab...................... */

let button1=document.querySelector("#button1");
let button2=document.querySelector("#button2");
let button3=document.querySelector("#button3");

let mohtava1=document.querySelector("#mohtava1");
let mohtava2=document.querySelector("#mohtava2");
let mohtava3=document.querySelector("#mohtava3");

button1.addEventListener("click",function ()
{
    mohtava1.classList.remove("active");
    mohtava2.classList.remove("active");
    mohtava3.classList.remove("active");
    mohtava1.classList.add("active");
}
)

button2.addEventListener("click",function ()
{
    mohtava1.classList.remove("active");
    mohtava2.classList.remove("active");
    mohtava3.classList.remove("active");
    mohtava2.classList.add("active");
}
)
button3.addEventListener("click",function ()
{
    mohtava1.classList.remove("active");
    mohtava2.classList.remove("active");
    mohtava3.classList.remove("active");
    mohtava3.classList.add("active");
}
)