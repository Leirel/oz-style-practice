import styled from "styled-components";

const Card = styled.div`
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  span {
    font-size: 12px;
    color: #d0ff00;
    border: 1px solid #d0ff00;
    padding: 3px 6px;
    border-radius: 4px;
    align-self: flex-start;
    font-weight: 500;
  }

  div {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    color: #999;
  }
`;

export default function Content({ content }) {
  return (
    <Card>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </Card>
  );
}
