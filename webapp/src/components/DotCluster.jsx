import { DOT_SHAPE, TRACK_PARTICIPANT_COLORS } from '../config.js';
import { decorativeColor, dotPosition, participantColor } from '../dotColors.js';

export default function DotCluster({ itemId, count, placements, yourVotes }) {
  const dots = Array.from({ length: count }, (_, i) => {
    const placedBy = placements && placements[i];
    const color = TRACK_PARTICIPANT_COLORS && placedBy
      ? participantColor(placedBy)
      : decorativeColor(i);
    return { key: i, color, position: dotPosition(itemId, i) };
  });

  return (
    <div className="dot-cluster">
      <div className="dot-cluster__dots" aria-hidden="true">
        {dots.map((dot) => (
          <span
            key={dot.key}
            className={`dot-cluster__dot dot-cluster__dot--${DOT_SHAPE}`}
            style={{
              background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.75), rgba(255,255,255,0) 55%), ${dot.color}`,
              left: dot.position.left,
              top: dot.position.top,
            }}
          />
        ))}
      </div>
      {yourVotes > 0 && <span className="dot-cluster__yours">you: {yourVotes}</span>}
    </div>
  );
}
