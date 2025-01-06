// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.error('Service Worker Registration Failed', err));
  }
  
  // Notification logic
  const notifyButton = document.getElementById('notify-button');
  notifyButton.addEventListener('click', () => {
    if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Hello from the PWA!', {
            body: 'This is a sample notification.',
            icon: '/icons/icon-192x192.png'
          });
        }
      });
    }
  });
  
