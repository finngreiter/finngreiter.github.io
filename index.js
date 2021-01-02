feather.replace();

setInterval(() => {
  document.querySelector('#periods').innerText += String.fromCharCode(
    Math.floor(Math.random() * (122 - 97) + 97)
  );
}, 1);
