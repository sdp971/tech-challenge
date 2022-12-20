const MenuButton = document.getElementsByClassName('menu-bar')[0];
const navListItems = document.getElementsByClassName('nav-list-items');
MenuButton.addEventListener('click', function () {
    for (var i = 0; i < navListItems.length; i++)
        navListItems[i].classList.toggle('active');
});

const form = document.getElementById('submit');
form.addEventListener('click', function () {
    alert("Your message has been sent successfully.")
})