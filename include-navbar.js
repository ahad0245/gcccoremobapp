document.addEventListener('DOMContentLoaded', function () {
    fetch('footernav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});