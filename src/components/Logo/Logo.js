import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        verticalAlign: "middle",
        marginLeft: 20,
        display: "inline-block"
      }}
    />
  );
};

export default Logo;