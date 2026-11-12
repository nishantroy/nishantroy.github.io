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
frame: browser
screenshot: ../../assets/projects/poker/desktop-v3.png
screenshotAlt: "Bink City on desktop mid-hand: the bet sizer open at three-quarters of the pot, HUD stats under each player, and a replay of the previous hand showing each player's equity by street"
---
Each table is a Durable Object holding authoritative game state over WebSockets, with alarms for turn timers so it hibernates between actions. Hold'em, Omaha and house variants, a per-player HUD, and hand replays with street-by-street equities.
