import { useEffect, useState } from 'react';
import { castVote, joinParticipant, loadBoard, requestMoreDots, subscribeVotes } from '../data/index.js';
import { getParticipantId } from '../participantId.js';
import ItemCard from './ItemCard.jsx';

export default function VotingBoard({ boardId }) {
  const [board, setBoard] = useState(null);
  const [votes, setVotes] = useState({});
  const [participant, setParticipant] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const participantId = getParticipantId(boardId);

    loadBoard(boardId)
      .then(setBoard)
      .catch((e) => setError(e.message));

    joinParticipant(boardId, participantId)
      .then(setParticipant)
      .catch((e) => setError(e.message));

    const unsubscribe = subscribeVotes(boardId, setVotes);
    return unsubscribe;
  }, [boardId]);

  async function handleVote(itemId) {
    try {
      const participantId = getParticipantId(boardId);
      const updated = await castVote(boardId, participantId, itemId);
      setParticipant(updated);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  async function handleRequestMoreDots() {
    try {
      const participantId = getParticipantId(boardId);
      const updated = await requestMoreDots(boardId, participantId);
      setParticipant((prev) => ({ ...prev, remainingDots: updated.remainingDots }));
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  if (error && !board) {
    return (
      <main className="page-centered">
        <p role="alert">{error}</p>
      </main>
    );
  }

  if (!board || !participant) {
    return (
      <main className="page-centered">
        <p>Loading board…</p>
      </main>
    );
  }

  return (
    <main className="voting-board">
      <header className="voting-board__header">
        <h1>{board.title}</h1>
        <div className="dot-budget">
          <span className="dot-budget__count" aria-label={`${participant.remainingDots} dots left`}>
            {participant.remainingDots}
          </span>
          <span className="dot-budget__label" aria-hidden="true">dots left</span>
          {participant.remainingDots <= 0 && (
            <button type="button" onClick={handleRequestMoreDots}>
              Request more dots (+4)
            </button>
          )}
        </div>
      </header>

      {error && <p role="alert" className="voting-board__error">{error}</p>}

      <div className="item-grid">
        {board.items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            voteCount={votes[item.id]?.count || 0}
            placements={votes[item.id]?.placements}
            yourVotes={participant.votes[item.id] || 0}
            disabled={participant.remainingDots <= 0}
            onVote={() => handleVote(item.id)}
          />
        ))}
      </div>
    </main>
  );
}
