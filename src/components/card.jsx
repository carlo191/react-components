export default function Card() {
  return (
    <div className="card " style={{ width: "20rem", height: "100%" }}>
      <img src="src\assets\img\600.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Titolo del Post</h5>
        <p className="card-text ">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-warning text-light">
          Leggi di più
        </a>
      </div>
    </div>
  );
}
