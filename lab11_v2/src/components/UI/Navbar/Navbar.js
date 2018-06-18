import React from 'react';

import NavbarItem from './NavbarItem/NavbarItem';

import classes from './Navbar.css';

const navbar = () => {
    const isAuthenticated = localStorage.getItem('name');
    return (
        <header>
            <nav className={classes.Navbar}>
                <ul className={classes.NavbarList}>
                    <NavbarItem
                        index={0}
                        to="/"
                        exact
                        label="Inicio" />
                    <NavbarItem
                        index={1}
                        to="/posts"
                        exact
                        label="Posts" />
                    <NavbarItem
                        index={2}
                        to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}
                        label="Nuevo Post" />
                    {!isAuthenticated
                    ? <NavbarItem
                        index={3}
                        to="/login"
                        label="Iniciar sesión" />
                    : <NavbarItem
                        index={3}
                        to="/logout"
                        label="Cerrar sesión" />
                    }
                </ul>
            </nav>
        </header>
    );
};
export default navbar;