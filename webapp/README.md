# Choachoakte webapp (placeholder)

Not yet built. This will be the participant-facing voting interface:

- Load items from a CSV/JSON config (shared schema with `../cli`)
- Real-time voting board (participants join by link or QR code, no account)
- Facilitator view of live results
- Structured export (see `../cli/choachoakte/board.py:export_results` for
  the target schema)

Backend: Firebase is the current default choice (see
`../docs/ROADMAP.md` decision log), documented as a default rather than a
hard dependency.

Tracked in `../docs/ROADMAP.md`, Stage 2.
