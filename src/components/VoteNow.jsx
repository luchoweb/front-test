import { useState } from "react";
import "../styles/components/VoteNow.scss";

const VoteNow = ({ voteId, handleSaveVote, isVoteSaved, setIsVoteSaved }) => {
  const initalVoteSelected = {id: 0, isPositiveVote: false};
  const [voteSelected, setVoteSelected] = useState(initalVoteSelected);

  const [isDisabledBtnVoteNow, setIsDisabledBtnVoteNow] = useState(true);

  const handleSelectVote = ({ voteId, isPositiveVote }) => {
    setIsDisabledBtnVoteNow(false);
    setVoteSelected({id: voteId, isPositiveVote})
  }

  return !isVoteSaved ? (
    <div className="vote-now">
      <button
        className={`vote-now__btn vote-now__btn--positive ${voteSelected.id === voteId && voteSelected.isPositiveVote ? 'vote-now__btn--selected' : ''}`}
        onClick={() => handleSelectVote({voteId, isPositiveVote: true})}
      >
        <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
      </button>

      <button
        className={`vote-now__btn vote-now__btn--negative ${voteSelected.id === voteId && !voteSelected.isPositiveVote ? 'vote-now__btn--selected' : ''}`}
        onClick={() => handleSelectVote({voteId, isPositiveVote: false})}
      >
        <img src="/assets/img/thumbs-down.svg" alt="thumbs down" />
      </button>

      <button
        className="vote-now__btn vote-now__btn--vote"
        disabled={isDisabledBtnVoteNow}
        onClick={() => handleSaveVote({ isPositiveVote: voteSelected.isPositiveVote })}
      >
        Vote Now
      </button>
    </div>
  ) : (
    <div className="vote-now vote-now--saved">
      <p className="vote-now__thanks">Thank you for your vote!</p>
      <button
        className="vote-now__btn vote-now__btn--vote"
        onClick={() => setIsVoteSaved(false)}
      >
        Vote Again
      </button>
    </div>
  )
}

export default VoteNow;
