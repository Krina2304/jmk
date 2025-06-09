// Toggle team member info on photo click
        document.querySelectorAll('.team-member').forEach((member) => {
            const photo = member.querySelector('.member-photo');
            photo.addEventListener('click', () => {
                member.classList.toggle('active');
            });
        });


        document.addEventListener("DOMContentLoaded", function() {

    const navbarLinks = document.querySelectorAll('.navbar-link');
    const checkBox = document.getElementById('check');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });
})