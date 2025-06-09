        
document.addEventListener("DOMContentLoaded", function() {

    const navbarLinks = document.querySelectorAll('.navbar-link');
    const checkBox = document.getElementById('check');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });
        
        
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "navbar-lists") {
                x.className += " responsive";
            } else {
                x.className = "navbar-lists";
            }
        }})


    function openModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }