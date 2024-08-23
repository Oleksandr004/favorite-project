import "../AboutInfo/AboutInfo.scss";

export function AboutInfo() {
  return (
    <section className="about-info">
      <div className="about-info__container">
        <h2 className="about-info__title">About the Club</h2>
        <div className="about-info__row">
          <div className="about-info-row__text">
            <h3 className="about-info-row__title">
              The Bayern Club,Creator of Bayern Token.
            </h3>
            <p className="about-info-row__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              <br />
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt <br /> mollit
              anim id est laborum. <br className="line-break"/> <br className="line-break"/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia <br />
              deserunt mollit anim id est laborum. <br className="line-break"/> <br className="line-break"/> Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia <br /> deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <img
            className="about-info-img"
            src="/about-the-club-info.png"
            alt=""
          />
        </div>
        <div className="about-info__description">
          <h4 className="about-info-descriptio__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h4>
          <div className="about-info-description__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud <br /> exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. <br /> Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br className="line-break"/> <br className="line-break"/> Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia <br />
            deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </section>
  );
}
