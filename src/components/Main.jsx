import Card from "../card";
export default function Main() {
  return (
    <main>
      {/* Titolo del blog */}
      <h1 className="text-center p-3">Il mio blog</h1>
      <main></main>
      {/* Card centrata */}
      <div className="d-flex justify-content-center mt-2">
        <Card />
      </div>
    </main>
  );
}
