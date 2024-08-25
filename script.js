
document.getElementById("netflixbtn").addEventListener("click", () => {
    window.location.href = 'index2.html';
});

// section 2
document.getElementById("sumbit-btn").addEventListener("click", () => {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    
    errorMessage.textContent = "";

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailPattern.test(emailInput.value)) {
       
        errorMessage.textContent = "Please enter a valid email address.";
        emailInput.style.border = '1px solid red'; 
    } else {
        errorMessage.textContent = "";
        emailInput.classList.remove("inputerror");
      
    }
});

// section 3
    const movieList = document.getElementById('movie-list');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    scrollLeftBtn.addEventListener('click', () => {
        movieList.scrollBy({
            left: -movieList.clientWidth / 3, 
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        movieList.scrollBy({
            left: movieList.clientWidth / 3, 
            behavior: 'smooth'
       });
});


// section 4 

document.addEventListener('DOMContentLoaded', () => {
  
    const dropdowns = document.querySelectorAll('.dropdown1, .dropdown2, .dropdown3, .dropdown4, .dropdown5, .dropdown6');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
           
            const activeDropdown = document.querySelector('.dropdown1.active, .dropdown2.active, .dropdown3.active, .dropdown4.active, .dropdown5.active, .dropdown6.active');
            
            if (activeDropdown && activeDropdown !== dropdown) {
                // Hide the currently active dropdown's content and update images
                const activeContent = activeDropdown.nextElementSibling;
                const activePlusImg = activeDropdown.querySelector('img');
                const activeCrossImg = activeDropdown.nextElementSibling.querySelector('#hideimg');
                
                if (activeContent) {
                    activeContent.style.display = 'none';
                }
                if (activePlusImg) {
                    activePlusImg.style.display = 'block';
                }
                if (activeCrossImg) {
                    activeCrossImg.style.display = 'none';
                }

                
                activeDropdown.classList.remove('active');
            }

            
            const content = dropdown.nextElementSibling;
            const plusImg = dropdown.querySelector('#dropdown1img img');
            const crossImg = content.querySelector('#hideimg');

            if (content) {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    if (plusImg) {
                        plusImg.style.display = 'block';
                    }
                    if (crossImg) {
                        crossImg.style.display = 'none';
                    }
                } else {
                    content.style.display = 'block';
                    if (plusImg) {
                        plusImg.style.display = 'none';
                    }
                    if (crossImg) {
                        crossImg.style.display = 'block';
                    }
                }
            }

            dropdown.classList.toggle('active');
        });
    });
});
