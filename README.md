# Budget Makan — Redesigned Demo

This is a lightweight static redesign of the Budget Makan front-end.

What changed
- Modern header with search and campus selector
- Responsive card grid for canteens and stalls
- Simple client-side demo data, search, campus filter
- Add-to-cart with localStorage persistence and a cart modal

How to run
1. Open this folder in VS Code.
2. Use the **Live Server** extension or any static file server to open `index.html`.

Example with `live-server` (if installed):

```powershell
npm install -g live-server
live-server .
```

Notes
- This is a front-end demo — integrate with a backend API to fetch real canteen and stall data, user authentication, and order processing.
- Accessibility: basic ARIA attributes and keyboard flow are included; further testing with screen readers is recommended.

Next steps you might ask me to do:
- Wire to a JSON API endpoint and implement lazy pagination
- Implement user accounts and payment flow
- Add image assets and polish visual details
