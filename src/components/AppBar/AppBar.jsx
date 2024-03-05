import {
  HeaderContainer,
  NavWrapper,
  HeadNavList,
  HeadNavItem,
  HeadNavLink,
} from 'components/AppBar/AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <HeaderContainer>
      <NavWrapper>
        <nav>
          <HeadNavList>
            {navItems.map(({ href, text }) => (
              <HeadNavItem key={href}>
                <HeadNavLink reloadDocument to={href}>
                  {text}
                </HeadNavLink>
              </HeadNavItem>
            ))}
          </HeadNavList>
        </nav>
      </NavWrapper>
    </HeaderContainer>
  );
};

export default AppBar;
