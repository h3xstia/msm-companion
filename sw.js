// MSM Companion — Service Worker
// Bump CACHE_NAME when you deploy new code so users get the update.
const CACHE_NAME = 'msm-v2';

// Files to pre-cache on install (the app shell)
const PRECACHE = ['/', '/index.html', '/data.js', '/manifest.json'];

// ── Install: pre-cache the app shell ─────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting(); // activate immediately
});

// ── Activate: delete old caches ───────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch: cache-first for static assets, network-only for Supabase ──────────
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Always use the network for Supabase API calls
  if (url.includes('supabase.co') || url.includes('supabase.io')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Dynamically cache images and JS as they are first requested
        if (
          response.ok &&
          (url.includes('/images/') || url.endsWith('.js') || url.endsWith('.json'))
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If offline and not cached, return a blank 503
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
