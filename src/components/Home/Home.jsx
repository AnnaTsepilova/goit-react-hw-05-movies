// import { useState } from 'react';
// import PropTypes from 'prop-types';

// import * as Notify from 'services/Notify';

import {
  HeaderContainer,
  HeadNavList,
  HeadNavItem,
  HeadNavLink,
} from 'components/AppBar/AppBar.styled';

export default function Home() {
  return (
    <HeaderContainer>
      <nav>
        <HeadNavList>
          <HeadNavItem>
            <HeadNavLink to="/">Home</HeadNavLink>
          </HeadNavItem>
          <HeadNavItem>
            <HeadNavLink to="/movies">Movies</HeadNavLink>
          </HeadNavItem>
        </HeadNavList>
      </nav>
    </HeaderContainer>
  );
}

// Home.propTypes = {
//   searchQuery: PropTypes.array,
// };
