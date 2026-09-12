# Roadmap

This roadmap tracks the path from initial build to a JOSS (or JORS, as a
fallback) submission. See `docs/statement-of-need.md` for the rationale.

## Stage 1 — Position and scaffold (current)
- [x] Repo scaffolded, public from first commit
- [x] Statement of need drafted
- [ ] Statement of need reviewed/finalized by Val
- [x] Project name and tagline finalized (ChoachoakteVote)
- [ ] **License pending JHU review** — see NOTICE.md and decision log below.
      Disclose to JH Technology Transfer Office per University IP Policy
      Section III.A before treating any license as final.

## Stage 2 — Build for personal teaching use
- [x] Webapp: config-driven item loading (CSV/JSON), real-time voting board
      (hybrid dot-voting mechanic, star/circle stickers, live Firestore sync)
- [x] Webapp: participant join via link + QR code, no account required
      (localStorage-based anonymous identity; QR generation is on the CLI
      side via `create --publish`)
- [x] Python CLI (`choachoaktevote-board`): create/configure a new session from
      a config file, output link + QR (Firestore-backed via `--publish`)
- [ ] Deploy a personal instance (own hosting + backend) for real use
- [x] `examples/chks_example.json` — worked example from Val's curated CHKS
      feature set (85 concepts)
- [x] Basic automated tests (config parsing, board/session creation, export
      schema) + CI workflow running them on every PR
- [x] CONTRIBUTING.md, CODE_OF_CONDUCT.md in place (done in initial scaffold)

## Stage 3 — Accumulate public development history
- [ ] Use in at least one real class/CBPR session
- [ ] Tagged releases (v0.1.0, etc.) as functionality lands
- [ ] Aim for 6+ months of public commit history with visible issues/PRs
      before submitting to JOSS (per JOSS review criteria on development
      history / desk-rejection risk)
- [ ] Clear the "substantial scholarly effort" bar (~3+ months dev effort;
      avoid staying a thin wrapper — add schema validation, multiple voting
      modes, or basic reliability/consensus metrics if needed)

## Stage 4 — Publication
- [ ] `CITATION.cff` and JOSS paper draft (`paper.md` + `paper.bib`)
- [ ] Statement of need finalized as JOSS "Statement of need" section, with
      explicit "state of the field" / build-vs-contribute framing citing
      Miro, Mentimeter, Klaxoon, GroupMap, dotstorming, DotVote, IdeaBoardz,
      and open-source retro tools
- [ ] Submit to JOSS
- [ ] Fallback venue if JOSS scope proves too strict: Journal of Open
      Research Software (JORS)

## Decision log
- **Name:** ChoachoakteVote (Yoem Noki / Yaqui — "be sticky, gooey")
- **License:** Pending. Developed using JHU resources (work computer, time
  supported by an NIH grant under the IndigiText project), which per the
  JHU IP Policy (Section IV.D) likely makes JHU the IP owner. Apache 2.0 is
  the working candidate for the eventual open-source license, but the
  actual choice and authority to grant it rest with JHU pending review by
  the Technology Transfer Office (disclosure obligation under Section
  III.A). No LICENSE file will be added until this is resolved — see
  NOTICE.md.
- **Backend for personal deployment:** Firebase (chosen for infrequent-use
  cost profile; documented as a default, not a hard dependency, to keep the
  open-source version approachable for others who may prefer a different
  backend)
