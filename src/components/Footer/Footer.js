import styled from "styled-components";
import Icons from '../FirstPage/Icons';

const Footer = () => {
  const FooterPage = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  `;

  const Author = styled.p`
    margin-right: 1rem;
  `
  return (
    <FooterPage id="connect">
      <Author>Kevin Wu 2023</Author>
      <Icons />
    </FooterPage>
  );
};

export default Footer;
