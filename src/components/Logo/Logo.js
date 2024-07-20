import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        verticalAlign: "middle",
        marginLeft: 20, /* adjust the value to your liking */
        marginRight: 20 /* adjust the value to your liking */
      }}
    />
  );
};

export default Logo;