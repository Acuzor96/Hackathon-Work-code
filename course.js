document.addEventListener('DOMContentLoaded', function() {
    const courseItems = document.querySelectorAll('.course-item');

    courseItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const details = this.querySelector('.overlay');
            details.style.opacity = '1';
        });
    });
});
