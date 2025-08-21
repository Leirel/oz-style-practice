import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: white;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  li {
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}
