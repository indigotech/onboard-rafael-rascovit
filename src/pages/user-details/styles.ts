import styled from 'styled-components';

export const WrapperUserDetails = styled.div`
  margin: 16px 0;

  .errorMessage {
    margin: 0px;
    color: red;
    font-size: small;
  }

  .card {
    border-radius: 5px;
    background-color: #ededed;
    margin: auto;
    padding: 0.5vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 50%;
    .cardTitle {
      font-size: large;
    }
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
`;
