import chefLogo from "../assets/chef.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={chefLogo} alt="chef Logo" />
        <h1>Chef Claude</h1>
      </header>
    </>
  );
}
