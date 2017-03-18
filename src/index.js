const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', ()=> {
  System.import('./image_viewer')
    .then(module => {
      console.log(module);
    });
});

document.body.appendChild(button);
