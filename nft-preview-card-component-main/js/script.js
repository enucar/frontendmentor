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
      <img src={image} />
    </div>
  );
};

const App = () => {
  const ethereum = {
    icon: "./images/icon-ethereum.svg",
    coinCode: "ETH",
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
      endDate={}
      image="./images/image-equilibrium.jpg"
    />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
