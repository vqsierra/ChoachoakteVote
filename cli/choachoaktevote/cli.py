"""Command-line interface for creating ChoachoakteVote voting sessions."""
from __future__ import annotations

import csv
import json
import sys
from pathlib import Path

import click

from .board import create_board
from .config import ConfigError


@click.group()
@click.version_option()
def main():
    """ChoachoakteVote: create participatory sticky-note voting sessions."""


@main.command("create")
@click.option("--config", "config_path", required=True, type=click.Path(exists=True),
              help="Path to a CSV or JSON item config file.")
@click.option("--title", required=True, help="Title for this session (e.g. 'Week 3').")
@click.option("--board-id", default=None, help="Optional fixed board id; random if omitted.")
@click.option("--out", "out_path", default=None, type=click.Path(),
              help="Write the board definition (JSON) to this path instead of stdout.")
def create(config_path: str, title: str, board_id: str | None, out_path: str | None):
    """Create a new board from an item config file.

    NOTE: this currently only builds the board definition locally; wiring
    it up to a live backend (Firebase or otherwise) and generating the
    shareable link + QR code is tracked in docs/ROADMAP.md, Stage 2.
    """
    try:
        board = create_board(config_path, title=title, board_id=board_id)
    except ConfigError as e:
        click.echo(f"Config error: {e}", err=True)
        sys.exit(1)

    payload = board.to_dict()
    text = json.dumps(payload, indent=2, default=str)

    if out_path:
        Path(out_path).write_text(text, encoding="utf-8")
        click.echo(f"Board '{board.board_id}' written to {out_path}")
    else:
        click.echo(text)


if __name__ == "__main__":
    main()
