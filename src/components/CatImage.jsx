function CatImage({ cat, id, guess }) {
  return (
    <div
      className="card-container"
      style={{ position: "relative" }}
      onClick={() => {
        guess(id);
      }}
    >
      <img
        src={cat.image}
        alt="Loading Cat"
        className="card"
        draggable={false}
      />
    </div>
  );
}

export default CatImage;
