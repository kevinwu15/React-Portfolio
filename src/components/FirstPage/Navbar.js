import './Navbar.css';
import styled from 'styled-components';

const Navbar = () => {
  const NavLink = styled.a`
    color: white;
    :hover {
      color: #0dcaf0;
    }
  `

  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" href="#projects">
                Projects
              </NavLink>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://www.google.com/">
                Skills
              </a>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" href="#connect">
                Connect
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
