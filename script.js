function ScrollAnimation(){
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        offset:100,
        

        
    });
}
ScrollAnimation()



// contect js 

// function sendMail(){
//     let parms ={
//         name :document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         mobile : document.getElementById("mobile").value,
//         message : document.getElementById("message").value,
//     }
//     emailjs.send("service_avoobw9","template_f42ibns",parms).then(alert("Email send!!"))
// };


// function good(){

// }



// service section 

// Get all service elements
const services = document.querySelectorAll('.service');

// Add event listener to each service element
services.forEach((service) => {
  service.addEventListener('mouseover', () => {
    // Toggle the visibility of the service element
    service.classList.toggle('active');
  });
});





// gallery section 



// Add event listener to gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.gallery-item-overlay').style.opacity = 1;
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.gallery-item-overlay').style.opacity = 0;
    });
});