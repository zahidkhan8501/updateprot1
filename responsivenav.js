var sidebar=document.querySelector(".ham-menu")[0];
var togglebtn= document.querySelector(".ham-menu img")[0];
var menu=document.querySelector(".navitems")[0];

sidebar.addEventListener('click', ()=> {
    menu.classList.toggle('active');
})
