const header = document.querySelector("header");
const first = document.querySelector(".first");
const aboutMe = document.querySelector(".aboutMe");
const turn = document.querySelector(".turn");

document.addEventListener("scroll", () => {
  const vh = window.pageYOffset;
  if (vh >= 100) {
    header.style.transform = "translateY(0px)";
  }
  if (vh < 100) {
    header.style.transform = "translateY(-100px)";
  }
  if (vh >= 300) {
    first.style.transform = "translateY(300px)";
    /*first.style.textShadow= "#f0c31f 0px 1px 3px"*/
    first.style.textShadow =
      "0px 0px #888, 0px 0px #666, 0px 0px #444, 0px 0px #222";
    first.style.backgroundColor = "#000000cc";
  }
  if (vh < 300) {
    first.style.transform = "rotateX(315deg) rotateZ(45deg)";
    first.style.textShadow =
      "1px 1px #888, 2px 2px #666, 3px 3px #444, 4px 4px #222";
    first.style.backgroundColor = "transparent";
  }
});

const card = document.querySelectorAll(".card");
const turnIcon = document.querySelector(".turn span");

turn.addEventListener("click", () => {
  card.forEach((i) => {
    const cardDetails = i.querySelectorAll(".cardDetails");
    const cardTitle = i.querySelectorAll(".cardTitle");
    cardDetails.forEach((f) => {
      cardTitle.forEach((x) => {
        if (f.style.display === "flex") {
          f.style.display = "none";
          x.style.display = "flex";
          i.style.boxShadow = "inset 0px 0px 1px 0px #f0c31f";
          /*turnIcon.className="fa-regular fa-face-flushed"*/
        } else {
          f.style.display = "flex";
          x.style.display = "flex";
          i.style.boxShadow = "inset 0px 0px 50px -10px #f0c31f";
          /*turnIcon.className="fa-solid fa-face-flushed"*/
        }
      });
    });
  });
});

card.forEach((elem) => {
  const cardDetails = elem.querySelectorAll(".cardDetails");
  const cardTitle = elem.querySelectorAll(".cardTitle");
  elem.addEventListener("click", () => {
    cardDetails.forEach((elm) => {
      cardTitle.forEach((el) => {
        if (elm.style.display === "flex") {
          elm.style.display = "none";
          el.style.display = "flex";
          elem.style.boxShadow = "inset 0px 0px 1px 0px #f0c31f";
        } else {
          elm.style.display = "flex";
          el.style.display = "none";
          elem.style.boxShadow = "inset 0px 0px 50px -10px #f0c31f";
        }
      });
    });
  });
}); 





/*

const flipCard = document.querySelectorAll(".flip-card-inner")
flipCard.forEach((er) =>{
  const flipCardBack = er.querySelector(".flip-card-back")
  const fCA= er.querySelector(".back")
  const btnO= er.querySelector(".show")

  er.addEventListener("mouseover",()=>{
    er.style.display="flex"
    flipCardBack.style.display="flex"
  })
    
  flipCardBack.addEventListener("mouseout",()=>{
      fCA.style.display="none"
      fCA.style.transform="rotate3D(0, 1, 0, 0deg)"
      flipCardBack.style.transform="rotate3D(0, 1, 0, 180deg)"
  })
  
  btnO.addEventListener("click", ()=>{
    console.log(flipCardBack)
    if(fCA.style.display=== "flex"){
      fCA.style.display="none"
      fCA.style.transform="rotate3D(0, 1, 0, 0deg)"
      flipCardBack.style.transform="rotate3D(0, 1, 0, 180deg)"
   }
    else{
       fCA.style.display = "flex";
    fCA.style.transform="rotate3D(0, 1, 0, 180deg) rotate3d(0, 1, 0, 315deg) translate3d(-163px, 0px, -70px)";      
      flipCardBack.style.transform="rotate3D(0, 1, 0, 180deg) rotate3d(0, 1, 0, 45deg)"
    }
  })

  
  
})*/








/*

/*
const flipCard = document.querySelectorAll(".flip-card-back")

flipCard.forEach(e => {
  const flipCardInner = document.querySelectorAll(".flip-card-front")
  flipCardInner.forEach(o =>{
    e.addEventListener("mouseover", () => {
      e.style.filter="blur(0px)"
      o.style.filter="blur(5px)"
    })
    e.addEventListener("mouseout", () => {
      e.style.filter="blur(0px)"
      o.style.filter="blur(0px)"
    })
  })
})
*/

/*

/*
document.querySelectorAll(".card").forEach(elem =>
elem.addEventListener("click",() => { 
   const det = elem.querySelectorAll(".cardDetails").forEach(elm =>
    elm.style.display = "none")
  })
)*/

/*
for (i = 0; i < card.length; i++) {
  
      
      console.log(card.item(i)) 
      for (f = 0; f < cardDetails.length; f++) {
        console.log(f)
        card.item(i).addEventListener('mouseover',()=>{ 
        return cardDetails.item(f).style.display="flex"
        })
        
      console.log(cardDetails.item(f))
      }
}*/
/*
card.item().forEach(item=>{
  /*cardTitle.forEach((title)=>{*//*
    cardDetails.forEach(details=>{
      item.addEventListener('mouseover',()=>{
        details.style.display="flex"
      })
    })
  })
/*})
*/
