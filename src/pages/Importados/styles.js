import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  margin-top: -312px;
  margin-left: 252px;

  Button {
    width: 200px;
    background: #1e90ff;
    color: #fff;
    padding: 8px;
    border-radius: 24px;
    border: 1px solid #fff;

    &:hover {
      background: ${shade(0.2, "#1e90ff")};
    }
  }
`;
