import DotCluster from './DotCluster.jsx';

export default function ItemCard({ item, voteCount, placements, yourVotes, disabled, onVote }) {
  return (
    <div className="item-card">
      <h2 className="item-card__title">{item.label}</h2>
      <DotCluster itemId={item.id} count={voteCount} placements={placements} yourVotes={yourVotes} />
      <div className="item-card__footer">
        <span className="item-card__count" aria-label={`${voteCount} votes`}>
          {voteCount}
        </span>
        <button
          type="button"
          className="item-card__vote-button"
          onClick={onVote}
          disabled={disabled}
          aria-label={`Add a dot to ${item.label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
