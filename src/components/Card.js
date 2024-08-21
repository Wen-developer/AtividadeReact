import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dac8b3;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  max-width: 250px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  color: black;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #777;
  text-align: center;
  font-style: oblique
`;

function Card({ title, description, imageUrl }) {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}

export default Card;