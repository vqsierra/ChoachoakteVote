# choachoakte-board (CLI)

Python CLI for creating Choachoakte voting sessions ("boards") from a
CSV/JSON item config file.

## Install (development)

```bash
cd cli
pip install -e ".[dev]"
```

## Usage

```bash
choachoakte-board create --config ../examples/chks_example.json --title "Week 3"
```

This currently prints (or writes, with `--out`) the board definition as
JSON. Wiring this up to a live backend (generating a real shareable
link + QR code, persisting to Firebase or another store) is tracked in
`../docs/ROADMAP.md`, Stage 2.

## Tests

```bash
pytest
```
