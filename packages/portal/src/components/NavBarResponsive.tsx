import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Button,
} from '@nextui-org/react';
import { UserButton, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Route, routes } from '@/constants/routes';

export const NavBarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { signOut } = useClerk();
  const router = useRouter();

  const menuItems: Route[] = [
    ...routes,
    {
      label: 'Logout',
      path: '/',
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">TriHard</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <UserButton afterSignOutUrl="/" />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((d, _i) => (
          <NavbarMenuItem key={`${d}-${_i}`}>
            {d.label === 'Logout' ? (
              <Button
                color={'danger'}
                variant={'flat'}
                onClick={() => signOut(() => router.push('/'))}
              >
                Logout
              </Button>
            ) : (
              <Link
                color={'foreground'}
                className="w-full"
                href={d.path}
                size="lg"
              >
                {d.label}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
