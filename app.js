var button = document.getElementById('hint');
button.addEventListener('click', function() {
    button.innerText = 'Auf, in eine neue Welt';
    button.onclick = function() {
        window.location.href = "https://circular-code.github.io/redirect2/";
    }
});
