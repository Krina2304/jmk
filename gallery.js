        function openModal(event) {
            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = ''; // Clear previous content

            let images = [];
            switch (event) {
                case 'event1':
                    images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9f3DeyWyB3kHcSvI_aIw62MMfV5iA8eqazA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9f3DeyWyB3kHcSvI_aIw62MMfV5iA8eqazA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9f3DeyWyB3kHcSvI_aIw62MMfV5iA8eqazA&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9f3DeyWyB3kHcSvI_aIw62MMfV5iA8eqazA&s','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9f3DeyWyB3kHcSvI_aIw62MMfV5iA8eqazA&s'];
                    break;
                case 'event2':
                    images = ['images/event2_1.jpg', 'images/event2_2.jpg', 'images/event2_3.jpg'];
                    break;
                case 'event3':
                    images = ['images/event3_1.jpg', 'images/event3_2.jpg', 'images/event3_3.jpg'];
                    break;
                case 'event4':
                    images = ['images/event4_1.jpg', 'images/event4_2.jpg', 'images/event4_3.jpg'];
                    break;
                case 'event5':
                    images = ['images/event5_1.jpg', 'images/event5_2.jpg', 'images/event5_3.jpg'];
                    break;
                case 'event6':
                    images = ['images/event6_1.jpg', 'images/event6_2.jpg', 'images/event6_3.jpg'];
                    break;
            }

            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                modalContent.appendChild(img);
            });

            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }




document.addEventListener("DOMContentLoaded", function() {

    const navbarLinks = document.querySelectorAll('.navbar-link');
    const checkBox = document.getElementById('check');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });
})