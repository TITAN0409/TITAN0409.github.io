// Manejo de menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        if (item.querySelector('ul')) {
            item.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    this.classList.toggle('active');
                }
            });
        }
    });

    // Cerrar menús al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav')) {
            menuItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Manejar la barra de búsqueda
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            // Aquí puedes implementar la lógica de búsqueda
            console.log('Búsqueda:', this.value);
        }
    });
}); 