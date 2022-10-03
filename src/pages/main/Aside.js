import React from "react";
import { List, ListItem, ListIcon, Stack, Text } from "@chakra-ui/react";
import { GiKimono } from "react-icons/gi";

const Aside = () => {
  return (
    <Stack border="1px solid #1503ba">
      <Text p={2} textAlign="center">
        <Text fontWeight="bold"> - Kenshukan -</Text> A través de los años
      </Text>
      <List spacing={3} p={3}>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2021
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2020
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2019
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2018
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2017
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2016
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2015
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2014
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2013
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2012
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2011
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2010
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2009
        </ListItem>
        <ListItem>
          <ListIcon as={GiKimono} color="white.500" />
          2008
        </ListItem>
      </List>
    </Stack>
  );
};

export default Aside;
