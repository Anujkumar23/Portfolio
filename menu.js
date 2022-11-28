document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("menu-button").addEventListener("click",showMenu )


    function showMenu(){
        const menu=document.querySelector(".menu");
       menu.style.height="100%"
    }



    document.getElementById("close-menu").addEventListener("click", closeMenu );


    function closeMenu(){
        const menu=document.querySelector(".menu");
        menu.style.height="0"
    }


    function addClickToMenuItems(){
      let  menuItems=document.querySelectorAll("section.menu nav ul>li");
        for(let menuItem of menuItems){
            menuItem.addEventListener("click",closeMenu)

        }
    }
    addClickToMenuItems();

})