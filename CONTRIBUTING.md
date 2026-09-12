# Contributing to Choachoakte

Thanks for your interest in contributing! This project is developed openly
from its earliest stages, and issues, discussion, and pull requests are
welcome even while it's in early development.

> **Note on license status:** this repo does not yet have a license file —
> see [NOTICE.md](NOTICE.md). Feedback, issues, and discussion are welcome
> now; substantial code contributions may need to wait until licensing (and
> any associated contributor agreement) is finalized with Johns Hopkins.

## Ways to contribute
- **Bug reports / feature requests:** open a GitHub issue. For bugs, include
  steps to reproduce; for features, describe the use case (especially if
  it's a CBPR/research workflow the tool doesn't yet support well).
- **Code:** fork the repo, create a feature branch, and open a pull request
  against `main`. Please include or update tests for any behavior change.
- **Documentation:** README, docs/, and example configs are all fair game.

## Development setup

### Web app (`webapp/`)
See `webapp/README.md` (to be added) for local setup instructions once the
frontend scaffold lands.

### Python CLI (`cli/`)
```bash
cd cli
pip install -e ".[dev]"
pytest
```

## Pull request guidelines
- Keep PRs focused — one logical change per PR is easier to review.
- Add a brief description of *why*, not just *what*.
- Update `docs/ROADMAP.md` if your change completes a roadmap item.

## Code of Conduct
This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By
participating, you agree to abide by its terms.
