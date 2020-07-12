import React from "react";
import PropTypes from 'prop-types';

import { Anchor, Box, Header as GrommetHeader, Nav, ResponsiveContext, Menu } from "grommet";
import Heading from '../heading/Heading';
import { useHistory } from "react-router-dom";

const items = [
  { label: "My Crops", href: "/myCrops" },
  { label: "Notifications", href: "/notifications" },
];

const Header = ({ title }) => {
  let history = useHistory();

  const handleNavigation = (route) => {
    history.push(route);
  }

  return (
    <GrommetHeader background="brand" pad={{ horizontal: "medium", vertical: "small" }} fill>
      
      <Box direction="row" align="center" gap="small">
        <Anchor  onClick={() => handleNavigation('/')}>
          <Heading level={3} size="small" color="neutral-1">
            {title}
          </Heading>
        </Anchor>
      </Box>

      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === "small" ? (
            <Menu
              color="neutral-1"
              label="Menu"
              items={ items.map(
                item => ({
                  ...item,
                  onClick: () => handleNavigation(item.href)
                })
              )}
            />
          ) : (
            <Nav direction="row">
              {items.map(item => (
                <Anchor
                  color="neutral-1"
                  label={item.label}
                  key={item.label}
                  onClick={() => handleNavigation(item.href) }
                />
              ))}
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </GrommetHeader>
  );
}
  

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;