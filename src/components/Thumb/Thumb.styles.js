import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  /* border: 1px solid var(--lightGrey); */
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    /* opacity: 0.8; */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;