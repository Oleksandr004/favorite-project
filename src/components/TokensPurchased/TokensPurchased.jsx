import "../TokensPurchased/TokensPurchased.scss";

export function TokensPurchased() {
  return (
    <section className="tokens-purchased">
      <div className="tokens-purchased__container">
        <h2 className="tokens-purchased__title">Tokens purchased</h2>
        <img
          className="tokens-purchased__img"
          src="/tokens__purchased.png"
          alt=""
        />
      </div>
    </section>
  );
}
