# ChoachoakteVote webapp

The participant-facing voting page. No account, no sign-in — a participant
opens their facilitator's link (`/{boardId}`), gets a dot budget, and taps
"+" to place dots on the items they care about.

## How voting works

- Each participant starts with **8 dots** and can place more than one on a
  favorite item.
- Once all 8 are spent, a **"Request more dots (+4)"** button appears —
  participants can keep re-upping in sets of 4 for as long as the session
  runs.
- Dots render as a scattered cluster of colored circles per item (not just
  a number), echoing the physical sticky-dot activity this digitizes.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in your Firebase project's web config
npm run dev
```

To develop the UI without any Firebase project at all, set
`VITE_USE_MOCK=true` in `.env.local` — it runs against an in-memory demo
board instead (see `src/data/mockBoardStore.js`). Its data is per-page-load
only; it does not persist across a reload the way the real Firestore store
does.

## Data model (Firestore)

Written by the CLI (`cli/choachoaktevote/firebase_store.py`) when a
facilitator runs `choachoaktevote-board create --publish`:

- `boards/{boardId}` — title, items (id/label/description)
- `boards/{boardId}/votes/{itemId}` — `{ count }`, pre-created at 0 per item

Written by this webapp:

- `boards/{boardId}/participants/{participantId}` — `{ remaining_dots, votes }`,
  one per anonymous participant (id generated client-side, stored in
  `localStorage`)

### Per-participant dot colors (optional, off by default)

By default, dots are colored decoratively (cycled by position, no meaning
attached) — a plain vote count is more privacy-conscious for youth research
data and needs no extra writes. Set `VITE_TRACK_PARTICIPANT_COLORS=true` to
instead color every dot by who placed it (consistent across all cards, for
researchers who want that view). This adds a `placements` array to each
`votes/{itemId}` doc recording participant ids in vote order.

## Security rules

See `../firestore.rules` at the repo root. Deploy with:

```bash
firebase deploy --only firestore:rules
```

It documents a known accepted limitation for this v1 (a technically
sophisticated participant could bypass the UI's dot-budget check by calling
Firestore directly) — read the comment at the top of that file before
relying on it for anything higher-stakes than a supervised classroom
session.

## Testing

```bash
npm test
```

Runs against the in-memory mock store (`src/data/mockBoardStore.js`), so no
Firebase project or credentials are needed in CI.

## Deployment

Deployed as a Cloudflare Worker serving static assets (see
`../wrangler.jsonc` at the repo root) — chosen over Firebase Hosting since
the project's domain (delasierra.io) already lives in Cloudflare, avoiding
the SSL-cert conflicts that can happen running Firebase Hosting behind
Cloudflare's proxy. Firestore remains the backend regardless of where the
static frontend is hosted.

Live at:
- https://choachoaktevote.delasierra.io (custom domain)
- https://choachoaktevote.vsierrajr.workers.dev (fallback)

To redeploy after a change:

```bash
cd webapp
VITE_FIREBASE_API_KEY=... VITE_FIREBASE_AUTH_DOMAIN=... VITE_FIREBASE_PROJECT_ID=... \
VITE_FIREBASE_STORAGE_BUCKET=... VITE_FIREBASE_MESSAGING_SENDER_ID=... VITE_FIREBASE_APP_ID=... \
npm run build
cd ..
npx wrangler deploy
```

(the real values are in the Firebase Console — see the Setup section above)
This is currently a manual step; there's no CI/CD auto-deploy on push yet.

The custom domain and DNS are managed via `wrangler.jsonc`'s `routes` —
Wrangler auto-provisions the DNS/SSL since the domain's zone is on the same
Cloudflare account. Deploying under a different domain or account just
means changing that one config value.

Tracked in `../docs/ROADMAP.md`, Stage 2.
