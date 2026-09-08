/*................this is for DropDown........... */
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

/*...................this is for modal.......................*/
const readmore1=document.querySelector("#readmore1");
const readmore2=document.querySelector("#readmore2");
const readmore3=document.querySelector("#readmore3");

const modal1=document.querySelector("#modal1");
const modal2=document.querySelector("#modal2");
const modal3=document.querySelector("#modal3");

const cancel1=document.querySelector("#cancel1");
const cancel2=document.querySelector("#cancel2");
const cancel3=document.querySelector("#cancel3");

readmore1.addEventListener("click",function()
{
    modal1.classList.toggle("show");
    cancel1.classList.toggle("active");
}
)
cancel1.addEventListener("click" , function()
{
    modal1.classList.toggle("show");
    cancel1.classList.toggle("active");
}
)

readmore2.addEventListener("click",function()
{
    modal2.classList.toggle("show");
    cancel2.classList.toggle("active");
}
)
cancel2.addEventListener("click" , function()
{
    modal2.classList.toggle("show");
    cancel2.classList.toggle("active");

}
)

readmore3.addEventListener("click",function()
{
    modal3.classList.toggle("show");
    cancel3.classList.toggle("active");
}
)
cancel3.addEventListener("click" , function()
{
    modal3.classList.toggle("show");
    cancel3.classList.toggle("active");

}
)
