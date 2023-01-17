// import styled from 'styled-components';

const Navbar = () => {
//   const GrowDiv = styled.div`
//   flex: 1;
//   `

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://www.google.com/">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://www.google.com/">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://www.google.com/">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
