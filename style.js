const closeBtn = document.querySelector(".hamburgerCloseIcon")
const openBtn = document.querySelector(".hamburgerMenuIcon")
const hamburger = document.querySelector(".hamburgerWrapper")
const hamburgerMenu = document.querySelector(".hamburger")



function openMenu(){
    if(hamburgerMenu.className.includes("close")){
        hamburgerMenu.classList.remove('close')
    }
    hamburgerMenu.classList.add("open")
    hamburger.style.display = 'block'
}

function closeMenu(){
    hamburgerMenu.classList.replace('open', 'close')
	setTimeout(()=>{
        hamburger.style.display = 'none'
    },100)
}

openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)






