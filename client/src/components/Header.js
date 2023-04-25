import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="'navbar mb-4 p-0 poop">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d.flex">
            <img
              src={logo}
              alt="logo"
              className="mr-2"
              style={{ width: "50px" }}
            />
            {/* <div>Let's Party</div> */}
          </div>
        </a>
      </div>
    </nav>
  );
}
