---
name: Bink City
tagline: Home poker night, in the browser.
hook: "Real-time games for my friend group, on my own TypeScript engine and Cloudflare Durable Objects."
order: 3
tint: "#1f4744"
platform: Web
stack: [TypeScript, React, Durable Objects]
status: Live
repo: https://github.com/nishantroy/poker
screenshot: ../../assets/projects/poker/1.webp
screenshotAlt: "Bink City table mid-hand: four players, a flop of three cards, a pot of 300 and Fold, Call and Raise buttons"
---
Each table is a Durable Object holding authoritative game state over WebSockets, with alarms for turn timers so it hibernates between actions. Hold'em, Omaha and house variants, a per-player HUD, and hand replays with street-by-street equities.
