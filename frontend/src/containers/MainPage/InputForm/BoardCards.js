import React, { Fragment, useEffect, useState } from "react";
import { Button, Container } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";

import styled from "styled-components";

const styledCardBack = styled.img``;

const FlexFragment = styled(Fragment)`
  display: flex;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const BoardCard = (displayCard, idx) => (
  <img id={"Board" + idx + "Card"} alt="first card" src={displayCard} />
);

const StyledRow = styled(Row)`
  width: 80%;
`;
//TODO: buttons that add two tone/rainbow/monotone/paired/HLL/etc.
const BoardCards = ({ deadCards }) => {
  const [flippinCards, updateFlippinCards] = useState([]);
  console.log(deadCards); //?
  useEffect(() => {
    if (deadCards && deadCards.indexOf(",") >= 0) {
      let flippinCardsClone = deadCards.split(",");
      flippinCardsClone = flippinCardsClone.map(cards =>
        cards.toUpperCase().trim()
      );
      updateFlippinCards(flippinCardsClone);
    }
  }, [deadCards]);

  return (
    <FlexFragment>
      <StyledRow>
        <Col xs={8} md={8} lg={8} className="text-center">
          <h4>Flop</h4>
        </Col>
        <Col xs={2} md={2} lg={2} className="text-center">
          <h4>Turn</h4>
        </Col>
        <Col xs={2} md={2} lg={2} className="text-center">
          <h4>River</h4>
        </Col>
      </StyledRow>
      <StyledRow>
        <StyledCol xs={8} md={8} lg={8}>
          {Array.isArray(flippinCards) &&
          flippinCards.length > 0 &&
          flippinCards[0].length > 1
            ? BoardCard("/assets/cards/" + flippinCards[0] + ".png", 0)
            : BoardCard("/assets/cards/back.png", 0)}

          {Array.isArray(flippinCards) &&
          flippinCards.length > 1 &&
          flippinCards[1].length > 1
            ? BoardCard("/assets/cards/" + flippinCards[1] + ".png", 1)
            : BoardCard("/assets/cards/back.png", 1)}

          {Array.isArray(flippinCards) &&
          flippinCards.length > 2 &&
          flippinCards[2].length > 1
            ? BoardCard("/assets/cards/" + flippinCards[2] + ".png", 2)
            : BoardCard("/assets/cards/back.png", 2)}
        </StyledCol>
        <StyledCol xs={2} md={2} lg={2}>
          {Array.isArray(flippinCards) &&
          flippinCards.length > 3 &&
          flippinCards[3].length > 1
            ? BoardCard("/assets/cards/" + flippinCards[3] + ".png", 3)
            : BoardCard("/assets/cards/back.png", 3)}
        </StyledCol>
        <StyledCol xs={2} md={2} lg={2}>
          {Array.isArray(flippinCards) &&
          flippinCards.length > 4 &&
          flippinCards[4].length > 1
            ? BoardCard("/assets/cards/" + flippinCards[4] + ".png", 4)
            : BoardCard("/assets/cards/back.png", 4)}
        </StyledCol>
      </StyledRow>
    </FlexFragment>
  );
};

export default BoardCards;