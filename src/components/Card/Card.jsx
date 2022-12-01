import styled from 'styled-components';

const Wrapper = styled.article``;
const CardImage = styled.img``;
const CardBody = styled.div``;
const CardTitle = styled.h3``;
const CardList = styled.ul``;
const CardListItem = styled.li``;

// {
//   img, name, (info = []), onClick;
// }
// onClick = { onClick };
export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper>
      <CardImage />
      <CardBody>
        <CardTitle>{name.official}</CardTitle>
        <CardList>
          {info.map(el => (
            <CardListItem key={el.title}>
              <b>{el.title}</b>
              {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
