import "../Roadmap/Roadmap.scss";

export function Roadmap() {
  return (
    <section className="roadmap">
      <div className="roadmap__container">
        <p className="strategy">Our strategy</p>
        <h2 className="roadmap-title">Roadmap</h2>
        <img className="roadmap-img" src="/roadmap.png" alt="" />
      </div>
    </section>
  );
}
