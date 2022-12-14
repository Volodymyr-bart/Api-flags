// import { Container } from 'components/Container/Container';

import styled from 'styled-components';
const Wrapper = styled.main`
  padding: 2rem 0;
  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;
export const Main = ({ children }) => {
  return (
    <div>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
