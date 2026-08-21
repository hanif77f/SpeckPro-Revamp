export default function Blooms() {
  return (
    <div className="c-atm">
      <span
        className="c-bloom"
        style={{
          width: "52vw",
          height: "52vw",
          top: "-16vw",
          left: "-10vw",
          background: "radial-gradient(circle,#0E8F79,transparent 68%)",
        }}
      />
      <span
        className="c-bloom"
        style={{
          width: "38vw",
          height: "38vw",
          bottom: "-14vw",
          right: "-6vw",
          background: "radial-gradient(circle,#7A5A22,transparent 66%)",
        }}
      />
    </div>
  );
}
