const menuBurger = () => {
    let nav = document.getElementById('nav').style.display;
    if (nav === 'none') {
        document.getElementById('nav').style.display = 'block';
    } else {
        document.getElementById('nav').style.display = 'none';
    }
}