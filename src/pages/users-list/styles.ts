import styled from 'styled-components';

export const WrapperUserList = styled.div`
  margin: 16px 0;

  .loadMore {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .loadMoreButton {
    margin-top: 1vh;
  }

  .loadIndicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .linkClass {
    padding: 8px 16px;
    border: 1px solid black;
    text-decoration: none;
    color: black;
  }

  .usersList {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vh;
  }

  .cardList {
    margin: 1vh 0;
    border-radius: 5px;
    background-color: #ededed;
    padding: 0.5vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 50%;
    cursor: pointer;
    .cardTitle {
      font-size: large;
    }
  }

  .cardList:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
