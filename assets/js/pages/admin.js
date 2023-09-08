const page = "Admin";

document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});