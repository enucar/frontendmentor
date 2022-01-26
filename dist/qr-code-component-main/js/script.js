const QrCode = ({ url, title, text }) => {
  const qrcode = React.useRef(null);

  React.useEffect(() => {
    new QRCode(qrcode.current.querySelector(".qr-code-code"), {
      text: url,
      width: 160,
      height: 160,
      colorDark: "#FFFFFF",
      colorLight: "#3685fe",
      correctLevel: QRCode.CorrectLevel.H,
    });
  });

  return (
    <div className="qr-code" ref={qrcode}>
      <div className="qr-code-code"></div>
      <div className="qr-code-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <QrCode
      url="https://github.com/enucar"
      title="Improve your front-end skills by building projects"
      text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    />
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
