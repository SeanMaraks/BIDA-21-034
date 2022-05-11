/*for arrow*/
const arrows=document.querySelectorAll(".arrow");
const nowshowingList=document.querySelectorAll(".now-showing-list");

arrows.forEach((arrow,i)=> {
    const itemNumber=nowshowingList[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow.addEventListener("click", () =>{
        const ratio=Math.floor(window.innerWidth/290);
        clickCounter++;
        if (itemNumber-(4+clickCounter)+(4-ratio) >=0) {
        nowshowingList[i].style.transform=`translateX(${
            nowshowingList[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
        }else{
            nowshowingList[i].style.transform="translateX(0)";
            clickCounter=0;

        }
    
        });
        console.log(Math.floor(window.innerWidth/290));
    
});


/*for toggle button*/

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


