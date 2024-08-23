import "../Partners/Partners.scss";

export function Partners() {
  return (
    <section className="partners">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-img">
          <div className="partners-img__container">
            <img
              src="/Partners/partners-bg.png"
              alt=""
              className="partners-img__bg "
            />
            <ul className="partners-img__list">
              <li className="partners-img__element"></li>
              <li className="partners-img__element">
                <img
                  src="/Partners/coin-market-cap.png"
                  alt=""
                  className="partners-img__coin-market-cap"
                />
              </li>
              <li className="partners-img__element">
                <img
                  src="/Partners/coin-gecko.png"
                  alt=""
                  className="partners-img__coin-gecko"
                />
              </li>
              <li className="partners-img__element">
                <img
                  src="/Partners/mexc-global.png"
                  alt=""
                  className="partners-img__mexc-global"
                />
              </li>
              <li className="partners-img__element">
                <img
                  src="/Partners/okx.png"
                  alt=""
                  className="partners-img__okx"
                />
              </li>
              <li className="partners-img__element">
                <img
                  src="/Partners/binance.png"
                  alt=""
                  className="partners-img__binance"
                />
              </li>
              <li className="partners-img__element">
                <img
                  src="/Partners/certik.png"
                  alt=""
                  className="partners-img__certik"
                />
              </li>
              <li className="partners-img__element">
                <img
                  src="/Partners/wallet-connect.png"
                  alt=""
                  className="partners-img__wallet-connect"
                />
              </li>
              <li className="partnrs-img__element">
                <img
                  src="/Partners/kucoin.png"
                  alt=""
                  className="partners-img__kucoin"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
