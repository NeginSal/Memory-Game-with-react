import "./SingleCard.css";

const SingleCard = ({ card , handleChoice}) => {
  const handleClick = () => {
    handleChoice(card)

  };
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="cover"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
