import "../styles/components/BarRulings.scss";

const BarRulings = ({ votes }) => {
  const totalVotes = votes.positive + votes.negative;
  const negativePercent = ((votes.negative / totalVotes) * 100).toFixed(0);
  const positivePercent = ((votes.positive / totalVotes) * 100).toFixed(0);

  return (
    <div className="bar-rulings">
      <div
        className="bar-rulings__votes bar-rulings__votes--positive"
        style={{
          width: `${positivePercent}%`
        }}
      >
        <img src="/assets/img/thumbs-up.svg" alt="thumbs up" />
        <span className="bar-rulings__percent bar-rulings__percent--positive">
          { positivePercent }%
        </span>
      </div>

      <div
        className="bar-rulings__votes bar-rulings__votes--negative"
        style={{
          width: `${negativePercent}%`
        }}
      >
        <span className="bar-rulings__percent bar-rulings__percent--negative">
          { negativePercent }%
        </span>
        <img src="/assets/img/thumbs-down.svg" alt="thumbs down" />
      </div>
    </div>
  )
}

export default BarRulings;
