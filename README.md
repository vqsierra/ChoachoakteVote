# ChoachoakteVote

**ChoachoakteVote** (Yoem Noki / Yaqui — intransitive verb: "be sticky, gooey")
is a free, open-source, no-account sticky-note voting tool for research and
community-based participatory research (CBPR) settings.

Facilitators load a list of items (e.g., candidate survey variables from a
codebook) from a simple CSV/JSON file. Participants join a live session by
link or QR code — no account needed — and vote using a familiar sticky-note
/ dot-voting interface. Results export as a structured, analysis-ready
dataset rather than a workshop screenshot.

> **Status: early development.** This project is being built in the open.
> See [docs/statement-of-need.md](docs/statement-of-need.md) for the full
> rationale and [docs/ROADMAP.md](docs/ROADMAP.md) for current status.
>
> **License status: pending.** This repo does not yet have a license file —
> see [NOTICE.md](NOTICE.md) for why, and what that means for use/reuse in
> the meantime.

## Why

General-purpose tools (Miro, Mentimeter, Slido, Klaxoon, GroupMap,
dotstorming) require facilitator accounts, cap participants or gate export
on free tiers, and produce meeting-shaped output rather than tidy data.
ChoachoakteVote is built specifically for the CBPR/research use case: config-driven
item lists, no accounts, and structured vote-count export designed to feed
directly into statistical or ML pipelines. See the full
[Statement of Need](docs/statement-of-need.md) for details and the
alternatives considered.

## Project structure

```
choachoaktevote/
├── webapp/          # Frontend voting app (participant + real-time board)
├── cli/             # Python package: choachoaktevote-board — session/board creation CLI
│   └── choachoaktevote/
├── examples/         # Example item configs (e.g., a CHKS variable subset)
├── docs/             # Statement of need, roadmap, design notes
└── .github/          # Issue templates, CI workflows
```

## License

**Pending.** See [NOTICE.md](NOTICE.md). The goal is a free, open-source
license (Apache 2.0 is the current candidate) once ownership/licensing is
confirmed with Johns Hopkins.

## Citation

A citation file (`CITATION.cff`) and JOSS paper will be added once the
project reaches a stable, documented release. See
[docs/ROADMAP.md](docs/ROADMAP.md) for the publication plan.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). This project is developed openly from
day one — issues, discussion, and pull requests are welcome even at this
early stage.
