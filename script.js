
  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const previewImage = document.querySelector(".ofc1");
    const thumbnails = document.querySelectorAll(".group-img img");

    thumbnails.forEach(img => {
      img.addEventListener("click", function () {
        previewImage.src = this.src;
      });
    });
  });


// script for animation 
const sr = ScrollReveal ({
        distance:"30px" ,
        duration: 1000 ,
        delay: 400,
        reset: false
      })
 
    
      sr.reveal('.ele1' ,{delay: 200 , origin: 'top'}) 
      sr.reveal('.ele2' ,{delay: 200 , origin: 'right'}) 
      sr.reveal('.titre1' ,{delay: 200 , origin: 'left'}) 
      sr.reveal('.box-CATEGORIES-1' ,{delay: 200 , origin: 'top'}) 
      sr.reveal('.box-CATEGORIES-2' ,{delay: 200 , origin: 'top'}) 
      sr.reveal('.box-CATEGORIES-3' ,{delay: 200 , origin: 'top'}) 
      sr.reveal('.products h1' ,{delay: 200 , origin: 'left'})  
      sr.reveal('.box-container-products' ,{delay: 200 , origin: 'bottom'}) 
      sr.reveal('.box-container-add' ,{delay: 200 , origin: 'left'}) 
      sr.reveal('.box-container-add2' ,{delay: 200 , origin: 'right'}) 
      sr.reveal('.container-box-shop' ,{delay: 200 , origin: 'bottom'}) 
     
      sr.reveal('.box-shop' ,{delay: 200 , origin: 'top'})  
      sr.reveal('.container-blog-box' ,{delay: 200 , origin: 'bottom'})  
      sr.reveal('.object-blog' ,{delay: 200 , origin: 'top'})  
      sr.reveal('.container-footer-box1' ,{delay: 200 , origin: 'left'})  
      sr.reveal('.container-footer-box2' ,{delay: 200 , origin: 'right'})  
      sr.reveal('.container-footer-final .box1' ,{delay: 200 , origin: 'top'})  
      sr.reveal('.container-footer-final .box2' ,{delay: 300 , origin: 'top'})  
      sr.reveal('.container-footer-final .news-later' ,{delay: 400 , origin: 'top'})  
      sr.reveal('.block-box' ,{delay: 200 , origin: 'left'})  
      sr.reveal('.block-box-info' ,{delay: 200 , origin: 'right'})  