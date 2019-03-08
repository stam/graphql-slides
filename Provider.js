import React from "react";
import styled from "styled-components";

const Bottom = styled.div([], {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0
});
const Button = styled.div([], {
  cursor: "pointer",
  width: "64px",
  height: "100vh"
});

const Previous = styled(Button)([], {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0
});

const Next = styled(Button)([], {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0
});

const Wrapper = styled.div`
    pre {
        font-size: 1.5rem;
    }
`;

const Bla = function({ children, index, length, update }) {
  return (
    <Wrapper>
      {children}
      <Bottom>
      </Bottom>
      <Previous
        role="button"
        title="Previous Slide"
        onClick={e => {
          update(previous);
        }}
      />
      <Next
        role="button"
        title="Next Slide"
        onClick={e => {
          update(next);
        }}
      />
    </Wrapper>
  );
};

export default Bla;
