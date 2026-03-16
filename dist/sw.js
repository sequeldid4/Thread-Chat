self.addEventListener('push', event => {
  const data = event.data?.json() || {}
  self.registration.showNotification(data.title || 'Thread', {
    body: data.body || 'New message',
    tag: 'thread-msg',
    renotify: true,
    vibrate: [200, 100, 200],
  })
})
self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(clients.openWindow('/Thread-Chat/'))
})
