document.addEventListener('DOMContentLoaded', function() {
    const courseItems = document.querySelectorAll('.course-item');

    courseItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const details = this.querySelector('.overlay');
            details.style.opacity = '1';
        });
    });
});

//------------------------------More-info -------------------------------------- 

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.more-info');
    const outputs = document.querySelectorAll('.more-details');
        
    buttons.forEach((button, index) => {
        
      button.addEventListener('click', () => {
        
        outputs.forEach(output => {
        output.classList.remove('show');
        });
        
        outputs[index].classList.toggle('show');
      });
    });
  });
