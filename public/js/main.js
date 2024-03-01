// adding eventlisner to the buttons:
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.btn');
    const images = document.querySelectorAll('.images');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('filter');

            //    1. removing the class of button
            filterButtons.forEach(btn => btn.classList.remove('active'));

            //2. Adding the active class to the clicked button
            button.classList.add('active');

            //3. Show or hide images based on the selected filter by using category
            images.forEach(image => {
                const category = image.getAttribute('category');
                // 4. using if condition to filter the images according to category
                if (filter === 'all' || filter === category) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});
