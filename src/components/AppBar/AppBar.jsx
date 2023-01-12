import {
  HeaderContainer,
  HeadNavList,
  HeadNavItem,
  HeadNavLink,
} from 'components/AppBar/AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export default function AppBar() {
  return (
    <HeaderContainer>
      <nav>
        <HeadNavList>
          {navItems.map(({ href, text }) => {
            return (
              <HeadNavItem key={href}>
                <HeadNavLink to={href}>{text}</HeadNavLink>
              </HeadNavItem>
            );
          })}
        </HeadNavList>
      </nav>
    </HeaderContainer>
  );
}
