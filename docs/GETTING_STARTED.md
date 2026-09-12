# Getting started (facilitator guide)

This is the "I have a session coming up, what do I actually do?" guide.
For setting up a *new* Firebase project or deployment from scratch, see
`../cli/README.md` and `../webapp/README.md` instead — this page assumes
that's already done (it is, for the `choachoaktevote.delasierra.io`
deployment).

## One-time setup

1. **Install Python 3.9+** if you don't have it already.
2. **Install the CLI.** Not published to PyPI yet (license pending JHU
   review — see `../NOTICE.md`), so install straight from GitHub:

   ```bash
   pip install "git+https://github.com/vqsierra/ChoachoakteVote.git#subdirectory=cli"
   ```

3. **Get a Firebase service account key** (only needed to publish a live,
   shareable session — skip this if you only want to preview a config
   locally). From the Firebase Console → Project Settings → Service
   Accounts → **Generate new private key**. Save it somewhere outside any
   git repo, then point the CLI at it:

   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/your-key.json
   ```

## Running a session

1. **Prepare your item list.** A CSV or JSON file with one row/object per
   sticky-note item: `id`, `label`, and an optional `description`. Reuse
   `examples/chks_example.json` (85 CHKS-derived concepts) or write your
   own — see `examples/README.md` for the exact shape.

2. **Create and publish the board:**

   ```bash
   choachoaktevote-board create \
     --config path/to/items.json \
     --title "Week 3 discussion" \
     --publish \
     --base-url https://choachoaktevote.delasierra.io
   ```

   This prints a participant link (`https://choachoaktevote.delasierra.io/<board-id>`)
   and a QR code in the terminal. Use `--qr-out qr.png` to save the QR
   code as an image instead (handy for a slide or printed handout).

3. **Share the link or QR code** with participants. No account or app
   install needed — they open it in any browser.

4. **Participants vote live.** Each person gets 8 dots to place (more than
   one per item allowed for a favorite) and can request 4 more once
   they've used them all. Votes update in real time for everyone watching.

5. **Pull results after the session:**

   ```bash
   choachoaktevote-board results --board-id <board-id> --out results.csv
   ```

   Produces one row per item — `board_id, board_title, item_id, label,
   vote_count` — ready to open in a spreadsheet or load into analysis code.

## Good to know

- Board IDs are random 8-character strings unless you pass `--board-id`
  yourself (useful if you want a memorable/predictable link).
- A session stays open indefinitely — there's no "close voting" action yet.
  If you need a hard cutoff, just stop sharing the link and pull results
  whenever you're ready.
- Re-running `results` any time later just gives you the current live
  tally — safe to check in on a session while it's still running.
