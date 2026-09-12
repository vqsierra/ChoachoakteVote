# Handoff: ChoachoakteVote — GitHub setup and continued build

**Context for Claude Code:** This repo was scaffolded in a sandboxed
environment with no network access, so a local git repo exists with one
initial commit, but it has never been pushed anywhere. Your job is to get it
onto GitHub with public history starting now, then continue the build.

> **⚠️ License status: pending — do not add a LICENSE file.**
> This project was built using Johns Hopkins University resources (work
> computer, NIH grant time under IndigiText). Per JHU's IP Policy, JHU likely
> owns the IP, so Val cannot unilaterally grant an open-source license until
> JHU's Technology Transfer Office weighs in. The repo intentionally has
> **no LICENSE file** — see `NOTICE.md` for the explanation. Do not add one,
> restore the earlier Apache 2.0 LICENSE, or otherwise imply a license has
> been granted, even if asked to "just add a standard license" by anyone
> other than Val directly confirming JHU has cleared it.

## 1. Verify what's here

```bash
cd choachoakte
git log --oneline    # should show one commit: "Initial scaffold: ..."
git status           # should be clean
```

Structure:
```
choachoaktevote/
├── webapp/                  # placeholder — not yet built
├── cli/                     # working Python CLI package (choachoaktevote-board)
│   ├── choachoaktevote/         # config.py, board.py, cli.py, __init__.py
│   ├── tests/                # pytest suite — passes as of initial commit
│   ├── pyproject.toml
│   └── README.md
├── examples/                # illustrative CHKS-style config (placeholder data)
├── docs/
│   ├── statement-of-need.md # drafted, reviewed by Val — may still need edits
│   └── ROADMAP.md            # staged plan toward JOSS submission
├── .github/                  # issue templates + CI workflow (cli-tests.yml)
├── NOTICE.md                 # explains pending license/IP-ownership status — do not remove
├── README.md
├── CONTRIBUTING.md
└── CODE_OF_CONDUCT.md
```

The CLI's core logic (`config.py`, `board.py`) was manually verified to work
with pure stdlib Python. `click` and `qrcode` are declared as dependencies
in `pyproject.toml` but were **not** installable/testable in the sandbox
(no network) — verify `pip install -e ".[dev]"` and `pytest` both pass
cleanly once you have network access, before pushing.

## 2. Create the GitHub repo and push

This is the step that actually starts the public commit-history clock that
JOSS's review criteria care about — do this as early as possible.

```bash
# from inside choachoaktevote/, with GitHub CLI authenticated (gh auth login)
gh repo create choachoaktevote --public --source=. --remote=origin \
  --description "Free, open-source, no-account sticky-note voting for participatory research (CBPR)" \
  --push
```

If `gh` isn't available/authenticated, create the repo manually on
github.com under Val's account (public, no README/license/gitignore —
this repo already has them), then:

```bash
git remote add origin https://github.com/<val-username>/choachoaktevote.git
git branch -M main
git push -u origin main
```

**Important:** don't squash or rewrite the initial commit — JOSS reviewers
and the desk-review process look at development history/timeline, so a
clean, real timestamp from today is what we want.

## 3. Repo settings to configure (once pushed)

- Add topics: `cbpr`, `participatory-research`, `dot-voting`, `research-tools`
- Enable Issues and Discussions
- Branch protection on `main`: require PR review before merge (once there's
  more than one contributor) — fine to skip solo for now, but worth turning
  on before opening it to outside contributors
- Confirm the CI workflow (`.github/workflows/cli-tests.yml`) runs
  successfully on the first push — fix if the `pytest`/`click`/`qrcode`
  install step fails

## 4. Immediate next build steps (see docs/ROADMAP.md, Stage 2)

Priority order:
1. Get `cli/` fully installable and its test suite green in CI
2. Wire `board.py`'s backend-agnostic `Board`/`export_results` into an actual
   Firebase-backed store (Val's earlier stated preference — see
   `docs/ROADMAP.md` decision log), matching the config/session-creation
   workflow Val described (facilitator runs the CLI locally to spin up a
   board per session, no admin UI in the app itself)
2. Scaffold `webapp/`: participant-facing voting UI reading the same
   item-config schema as `cli/choachoaktevote/config.py`, join by link or QR
3. Replace `examples/chks_example.json` with Val's real ~20-variable CHKS
   subset once she provides it (currently a placeholder — see
   `examples/README.md`)
4. Add `CITATION.cff` once there's a stable release — not yet, per
   `docs/ROADMAP.md` Stage 4

## 5. Do NOT do yet

- **Do not add any LICENSE file or otherwise grant a license** — see the
  warning at the top of this doc. This includes not publishing the CLI
  package to PyPI (a package index install implies redistribution rights)
  until licensing is resolved.
- Don't submit to JOSS or draft the JOSS paper.md/paper.bib — Stage 4 in the
  roadmap, gated on 6+ months of public history, real use in a session, AND
  a resolved license (JOSS requires an OSI-approved license at submission)
- Don't change the project name without checking with Val ("ChoachoakteVote,"
  Yoem Noki/Yaqui for "be sticky, gooey")

## Questions for Val (surface these, don't guess)

- GitHub username/org to create the repo under
- Status of the disclosure to the JH Technology Transfer Office — has it
  been submitted yet? This gates when a LICENSE file can be added.
- Whether the real CHKS variable subset can be shared now to replace the
  placeholder example
- Firebase project details for wiring up the backend (new project, or reuse
  an existing one from earlier conversations about this app) — note this
  may itself count as "University support" relevant to the IP disclosure
