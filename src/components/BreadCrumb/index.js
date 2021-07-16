import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTite }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTite}</span>
      </Content>
    </Wrapper>
  );
};

BreadCrumb.propTypes = {
  movieTite: PropTypes.string,
};

export default BreadCrumb;
