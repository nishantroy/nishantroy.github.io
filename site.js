// Screen switcher for each project's phone. Images are declared here so the
// HTML stays small; the first screen is already in the markup for no-JS.
const SCREENS = {
  mise: [
    { label: 'Recipes', src: 'assets/mise/1.webp', alt: 'Mise home: Good evening, an ask bar for what can I cook, and recipe photo cards' },
    { label: 'Swaps', src: 'assets/mise/2.webp', alt: 'Ingredient check for a braised pork belly recipe: Shaoxing wine is missing, with dry sherry from your pantry suggested as the closest swap' },
    { label: 'Cook', src: 'assets/mise/3.webp', alt: 'Cook mode, step 3 of 11, with a running ten-minute marinate timer and the ingredients for this step' },
    { label: 'Made it', src: 'assets/mise/4.webp', alt: 'I made this sheet with suggested changes to the recipe, such as less soy sauce and a note about extra time' },
  ],
  poker: [
    { label: 'Table', src: 'assets/poker/1.webp', alt: 'Bink City table mid-hand: flop dealt, pot of 300, your hole cards and Fold, Call, Raise buttons' },
    { label: 'Replay', src: 'assets/poker/2.webp', alt: 'Hand replay with every player\'s cards revealed and equity bars per street' },
    { label: 'Lobby', src: 'assets/poker/3.webp', alt: 'Lobby with Create a table, a join code field, your running tables and the leaderboard' },
    { label: 'Login', src: 'assets/poker/4.webp', alt: 'Login screen with the Bink City logo, username and PIN' },
  ],
  latte: [
    { label: 'Score', src: 'assets/latte/1.webp', alt: 'A tulip pour photographed from above with the measured foam outlined, scored 84 out of 100' },
    { label: 'Coaching', src: 'assets/latte/2.webp', alt: 'Next pour coaching: even out the sides, smoother milk, make the white pop' },
    { label: 'History', src: 'assets/latte/3.webp', alt: 'History tab with a progress chart of recent tulips and per-component trends' },
    { label: 'Home', src: 'assets/latte/4.webp', alt: 'Home screen: pick heart, tulip or rosetta, then choose a photo' },
  ],
  lockbox: [
    { label: 'Home', src: 'assets/lockbox/1.webp', alt: 'Phone Lockbox home: Lock now button and tonight\'s bedtime lock set from 10:30 PM to 7:00 AM' },
    { label: 'Bedtime', src: 'assets/lockbox/2.webp', alt: 'Active bedtime lock: Get some rest, opens tomorrow at 7:00 AM, with a Need to end early recovery card' },
    { label: 'Focus', src: 'assets/lockbox/3.webp', alt: 'Active focus lock: Keep a clear lane, opens today at 4:30 PM' },
  ],
};

for (const article of document.querySelectorAll('.project')) {
  const key = article.dataset.project;
  const screens = SCREENS[key] || [];
  if (screens.length < 2) continue;

  const img = article.querySelector('.phone img');
  const phone = article.querySelector('.phone');
  const list = article.querySelector('.screens');

  // Preload so switching is instant.
  for (const s of screens) { const i = new Image(); i.src = s.src; }

  screens.forEach((s, idx) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.textContent = s.label;
    b.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
    b.addEventListener('click', () => {
      for (const other of list.children) other.setAttribute('aria-selected', 'false');
      b.setAttribute('aria-selected', 'true');
      phone.classList.remove('is-switching');
      void phone.offsetWidth; // restart the animation
      phone.classList.add('is-switching');
      img.src = s.src;
      img.alt = s.alt;
    });
    list.appendChild(b);
  });

  // Left and right arrows move between screens, as in a native tab strip.
  list.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const tabs = [...list.children];
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    next.focus();
    next.click();
    e.preventDefault();
  });
}
