const labels = document.querySelectorAll('.label');

labels.forEach((label, i) => {
  
  let input = label.parentElement.nextElementSibling.firstElementChild;
  
  if(input.getAttribute('type') !== 'button') {
    addLabelAnim(label, input)
  }
});

function addLabelAnim(label, input) {
  
  input.addEventListener('focus', ()=> {
    
    if(input.value.length >= 0) {
      label.classList.add('labelAnim');
    }
  });
  
}
