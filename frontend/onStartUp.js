

document.body.addEventListener('loadstart', () => {
  console.log("loading")
 document.body.classList.add('loading');
});

document.body.addEventListener('loadend', () => {
  console.log("loaded")
 document.body.classList.remove('loading');
});

console.log(document.body)