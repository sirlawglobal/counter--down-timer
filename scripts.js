const showDays =document.querySelector(".days");  
const showHour =document.querySelector(".hours");  
const showMinutes =document.querySelector(".minutes"); 

const showSeconds =document.querySelector(".seconds");  

const cardContainer = document.querySelector(".card-container");
  
  // Set the date we're counting down to
  const countdownDate = new Date("Feb 29, 2024 00:00:00").getTime();
  
  // Update the countdown every 1 second
  const countdownInterval = setInterval(function() {
  
    // Get the current date and time
    const now = new Date().getTime();
  
    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;
  
    // Calculate days, hours, minutes, and seconds
  

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the countdown in the element with id="countdown"

    showDays.innerHTML = days;
    showHour.innerHTML = hours;
    showMinutes.innerHTML = minutes;
    showSeconds.innerHTML = seconds;


  // const card = document.createElement("div");
  // card.className = "card";

  // const cardH1 = document.createElement("h1");
 

  // card.appendChild(cardH1);

  // const p = document.createElement("p");

  // card.appendChild(p);
  // cardContainer.appendChild(card);
  
  // cardH1.innerHTML = days;
  // p.innerHTML = "days";




  
  
  
  


  
    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelectorAll(".card").forEach((card)=>{
    card.innerHTML="EXPIRED";
    card.style.color = "red";
    card.style.fontSize = "30px"
  })  
    }
  }, 1000);