const container = document.getElementById('cnotification');

const showNotification = () => {
    const notif = document.createElement('div');
    notif.innerHTML = 'Welcome to my Notification JavaScript Project';
    notif.classList.add('notification-text');

    container.appendChild(notif)

    setTimeout(() => {
        notif.remove();
    }, 3000);
}