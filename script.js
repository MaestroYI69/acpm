document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file');
    const fileNameSpan = document.getElementById('fileName');
    const form = document.getElementById('uploadForm');
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            fileNameSpan.textContent = `Archivo seleccionado: ${e.target.files[0].name}`;
        } else {
            fileNameSpan.textContent = '';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado (simulación)');
    });

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});