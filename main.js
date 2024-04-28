 const galleryItem = document.getElementsByClassName( "gallery-iteam");
  const lightBoxContainer = document.createElement("div");
  const lightBoxContent = document.createElement("div");
  const  lightBoxImg = document.createElement("img"); 
  const lightBoxPrev = document.createElement("div") ;
  const lightBoxNext = document.createElement("div");  

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
  lightBoxPrev.classList.add("fa" ,"fa-angle-left", "lightbox-prev" );   
  lightBoxNext.classList.add("fa","fa-angle-right","lightbox-next");


lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev) ;
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);
let index =1;
function showLight(n){
 if(n > galleryItem.length){
  index =1;
 }else if(n<1){
    index = galleryItem.length;
 } 
  let imageLoctaion = galleryItem[index-1].children[0].getAttribute("src"); 
  lightBoxImg.setAttribute("src",imageLoctaion)  
} 
 function currentImage(){
    lightBoxContainer.style.display =" block";
    let imageIndex  = parseInt( this.getAttribute("data-index")) ;
    showLight(index = imageIndex);

 }  
 for(let i = 0; i<galleryItem.length; i++){
    galleryItem[i].addEventListener("click",currentImage)
 }
 function sliderImage(n){
    showLight(index += n);
 }
 function prevImage(){
    sliderImage(-1);
 }
 function nextImage(){
    sliderImage(1)
 }  
 lightBoxPrev.addEventListener ("click",prevImage);
 lightBoxNext.addEventListener("click", nextImage);

 function closeLight(){
    if(this  === event.target){
      lightBoxContainer.style.display = "none";
    }
 }  
 lightBoxContainer.addEventListener("click",closeLight) ;

// finsh 