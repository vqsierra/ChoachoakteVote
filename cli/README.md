# choachoaktevote-board (CLI)

Python CLI for creating ChoachoakteVote voting sessions ("boards") from a
CSV/JSON item config file.

## Install (development)

```bash
cd cli
pip install -e ".[dev]"
```

## Usage

```bash
choachoaktevote-board create --config ../examples/chks_example.json --title "Week 3"
```

This prints (or writes, with `--out`) the board definition as JSON without
touching any backend.

### Publishing a session to Firebase

Add `--publish` to also write the board to Firestore and print a shareable
participant link + QR code:

```bash
choachoaktevote-board create --config ../examples/chks_example.json --title "Week 3" --publish
```

This requires a Firebase project with **Firestore** enabled. Authenticate
the CLI with a service-account key (Firebase console → Project settings →
Service accounts → Generate new private key), then point
`GOOGLE_APPLICATION_CREDENTIALS` at the downloaded JSON file — **never
commit this file to the repo**:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccountKey.json
```

The shareable link uses a placeholder domain until `webapp/` is deployed;
pass `--base-url` or set `CHOACHOAKTEVOTE_WEBAPP_URL` once you have a real
one. Use `--qr-out path.png` to save the QR code as an image instead of
printing it to the terminal.

Once participants have voted (via the webapp, once built), pull results
with:

```bash
choachoaktevote-board results --board-id <id> --out results.csv
```

## Tests

```bash
pytest
```
