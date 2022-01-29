const clockIcon = "./images/icon-clock.svg"; // replace this with 'import' in real react project
const viewIcon = "./images/icon-view.svg"; // replace this with 'import' in real react project

const NftPreviewCard = ({
  image,
  title,
  text,
  value,
  coin,
  endDate,
  creator,
}) => {
  return (
    <div className="nft-card">
      <a className="nft-card-image" href="#">
        <div className="nft-card-image-holder" style={{ backgroundImage: `url(${image})` }} />
        <div className="nft-card-image-hover">
          <img src={viewIcon} />
        </div>
      </a>
      <div className="nft-card-content">
        <div className="nft-card-title">
          <a href="#">{title}</a>
        </div>
        <div className="nft-card-text">{text}</div>
        <div className="nft-card-info">
          <div className="nft-card-coin">
            <img src={coin.icon} />
            <div className="nft-card-coin-value">
              {value} <span>{coin.code}</span>
            </div>
          </div>
          <div className="nft-card-time">
            <img src={clockIcon} />
            <div className="nft-card-time-left">3 days left</div>
          </div>
        </div>
      </div>
      <div className="nft-card-creator">
        <div
          className="nft-card-creator-avatar"
          style={{ backgroundImage: `url(${creator.avatar})` }}
        ></div>
        <div className="nft-card-creator-name">
          Creation of <a href="#">{creator.name}</a>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const ethereum = {
    icon: "./images/icon-ethereum.svg",
    code: "ETH",
  };

  const creator = {
    name: "Jules Wyvern",
    avatar: "./images/image-avatar.png",
  };

  return (
    <NftPreviewCard
      title="Equilibrium #3429"
      text="Our Equilibrium collection promotes balance and calm."
      value={0.0041}
      coin={ethereum}
      creator={creator}
      endDate={1645007212}
      image="./images/image-equilibrium.jpg"
    />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
