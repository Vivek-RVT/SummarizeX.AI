// PWA Service Worker Registration
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available
                  showUpdateNotification();
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Show update notification
const showUpdateNotification = () => {
  if (Notification.permission === 'granted') {
    new Notification('SummarizeX.AI Updated!', {
      body: 'New version available. Refresh to update.',
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png'
    });
  }
};

// Request notification permission
export const requestNotificationPermission = () => {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted');
      }
    });
  }
};

// Check if app is installed
export const isAppInstalled = (): boolean => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isInWebAppiOS = (window.navigator as any).standalone === true;
  return isStandalone || isInWebAppiOS;
};

// Check if device is iOS
export const isIOS = (): boolean => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

// Check if device is Android
export const isAndroid = (): boolean => {
  return /Android/.test(navigator.userAgent);
};

// Get install instructions for different platforms
export const getInstallInstructions = () => {
  if (isIOS()) {
    return {
      platform: 'iOS',
      instructions: [
        'Tap the Share button in Safari',
        'Scroll down and tap "Add to Home Screen"',
        'Tap "Add" to install the app'
      ]
    };
  } else if (isAndroid()) {
    return {
      platform: 'Android',
      instructions: [
        'Tap the menu button (⋮) in Chrome',
        'Tap "Add to Home screen"',
        'Tap "Add" to install the app'
      ]
    };
  } else {
    return {
      platform: 'Desktop',
      instructions: [
        'Look for the install icon in your browser\'s address bar',
        'Click "Install" when prompted',
        'The app will be added to your applications'
      ]
    };
  }
};

// Background sync registration
export const registerBackgroundSync = (tag: string) => {
  if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
    navigator.serviceWorker.ready.then((registration) => {
      return registration.sync.register(tag);
    });
  }
};

// Show offline status
export const showOfflineStatus = () => {
  const offlineToast = document.createElement('div');
  offlineToast.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
  offlineToast.textContent = 'You are offline';
  document.body.appendChild(offlineToast);
  
  setTimeout(() => {
    offlineToast.remove();
  }, 3000);
};

// Show online status
export const showOnlineStatus = () => {
  const onlineToast = document.createElement('div');
  onlineToast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
  onlineToast.textContent = 'You are back online';
  document.body.appendChild(onlineToast);
  
  setTimeout(() => {
    onlineToast.remove();
  }, 3000);
};

// Network status monitoring
export const setupNetworkMonitoring = () => {
  window.addEventListener('online', showOnlineStatus);
  window.addEventListener('offline', showOfflineStatus);
};