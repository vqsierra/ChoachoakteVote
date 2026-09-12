# Statement of Need

Community-based participatory research (CBPR) frequently relies on structured
group prioritization — dot voting, nominal group technique (NGT), Delphi
rounds — to let community members and study participants rank or weight
items such as candidate survey variables, program priorities, or intervention
components. In practice, researchers running these sessions in live or
virtual settings (classrooms, community workshops, Zoom-based CBPR activities)
turn to general-purpose collaboration platforms such as Miro, Mural, Mentimeter,
Slido, Klaxoon, GroupMap, or dotstorming to run the voting itself.

These tools are built for business brainstorming and agile retrospectives, and
that orientation creates real friction for research use:

- **Facilitator (and often participant) accounts are required.** In community
  and CBPR settings, requiring an account is a meaningful barrier and can
  itself raise privacy and consent considerations for participants who are
  not enrolled as research subjects but are contributing input.
- **Free tiers cap participants and gate exports.** Mentimeter's free plan,
  for example, caps participation and reserves data export for paid plans;
  Klaxoon's free plan limits both participants per activity and activities
  per month. For infrequent academic use (a class session every few months,
  a one-off community workshop), a subscription is hard to justify, and a
  capped free tier is often not viable.
- **Output is meeting-shaped, not data-shaped.** These platforms are built to
  produce a visual summary of a workshop, not a structured, analysis-ready
  dataset. Getting from "board of votes" to a tidy table of item-by-vote-count
  usable in a statistical or machine-learning pipeline typically requires
  manual re-entry.
- **None are oriented toward the specific CBPR workflow** of presenting a
  research codebook or candidate-variable list (e.g., a set of survey items
  under consideration from a dataset like CHKS) for community prioritization,
  where the point of the session is producing structured, citable data on
  what the community valued, not a workshop artifact.

Free and open-source alternatives exist (DotVote, IdeaBoardz, dotstorm,
retro-board, and similar tools), but these are also built and documented for
agile/retrospective use, and none combine a config-driven item list with a
structured, analysis-ready export designed for downstream research or
machine-learning use.

**Choachoakte** (Yoem Noki / Yaqui, intransitive verb: "be sticky, gooey")
fills this gap. It is a free, open-source, no-account sticky-note voting tool
designed specifically for research and CBPR settings:

- Facilitators define the items to be voted on via a simple CSV/JSON
  configuration file — no hardcoded content, so any codebook, variable list,
  or set of priorities can be loaded without modifying code.
- Participants join a session by link or QR code, with no account required,
  and vote using a familiar sticky-note/dot-voting interaction.
- Session results export as a structured, tidy dataset (item identifiers,
  vote counts, session metadata) suitable for direct use in statistical
  analysis or as input to machine-learning feature-selection and
  prioritization pipelines — operationalizing the "voting" stage of
  established consensus methods (NGT, Delphi, community priority indices)
  as reusable research data rather than a one-off meeting summary.
- A companion Python CLI creates and configures new voting sessions from a
  configuration file, so no dedicated admin interface is required and each
  session can be reproducibly scripted.

Choachoakte is aimed at researchers, instructors, and community partners
running participatory prioritization activities who need a free, low-friction,
research-appropriate alternative to commercial workshop tools, and a
structured-data output that existing dot-voting tools do not provide.

---
*Draft — edit freely. This is meant to become both the README intro and the
"Statement of need" section of the eventual JOSS paper. Update the specific
CHKS/BSPH details if you want the public framing to be more generic before
the repo goes live.*
