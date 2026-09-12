import VotingBoard from './components/VotingBoard.jsx';

function getBoardIdFromPath() {
  const segment = window.location.pathname.replace(/^\/+|\/+$/g, '');
  return segment || null;
}

export default function App() {
  const boardId = getBoardIdFromPath();

  if (!boardId) {
    return (
      <main className="page-centered">
        <h1>ChoachoakteVote</h1>
        <p>Open the link your facilitator shared to join a voting session.</p>
      </main>
    );
  }

  return <VotingBoard boardId={boardId} />;
}
