import React from "react";
import {
  Box,
  IconButton,
  HStack,
  ListItem,
  List,
  Text,
} from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <HStack h="auto" bg="gray.700" w="100%" justifyContent="space-around">
      <Box flexWrap="wrap" p={3}>
        <Text>Contactos</Text>
        <List color="gray" p={3}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </List>
      </Box>
      <HStack bg="gray.700">
        <Box m="1px">
          <IconButton icon={<FaFacebookF />} />
        </Box>
        <Box m="1px">
          <IconButton icon={<FaInstagram />} />
        </Box>
        <Box m="1px">
          <IconButton icon={<FaYoutube />} />
        </Box>
      </HStack>
    </HStack>
  );
};

export default Footer;
