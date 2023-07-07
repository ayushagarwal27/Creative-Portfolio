import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../components/allSvg';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;

  color: ${props => props.theme.text};
  z-index: 3;

  & a {
    color: inherit;
    text-decoration: none;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Wrapper>
      <div>
        <Link target='_blank' to='/'>
          <Github width={25} height={25} fill='currentColor' />
        </Link>
      </div>
      <div>
        <Link target='_blank' to='/'>
          <Twitter width={25} height={25} fill='currentColor' />
        </Link>
      </div>
      <div>
        <Link target='_blank' to='/'>
          <YouTube width={25} height={25} fill='currentColor' />
        </Link>
      </div>
      <div>
        <Link target='_blank' to='/'>
          <Facebook width={25} height={25} fill='currentColor' />
        </Link>
      </div>
      <Line />
    </Wrapper>
  );
};

export default SocialIcons;