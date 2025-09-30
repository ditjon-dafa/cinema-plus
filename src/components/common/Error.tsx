function Error() {
  return (
    <div
      style={{
        color: "red",
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        Until now the project is tested on :
        <ul>
          <li>Wi-Fi</li>{" "}
          <li>Mobile Data - only on iPhone, Vodafone Albania </li>
        </ul>
      </p>
    </div>
  );
}

export default Error;
