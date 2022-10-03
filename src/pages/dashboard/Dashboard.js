import React from "react";
import Main from "../main/Main";
import { VStack, Box, Button, HStack, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";

const Dashboard = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  return (
    <VStack w="100%" bg={colorMode === "dark" ? "gray.600" : "#f2f2f2"}>
      <HStack w="100%" display="flex" justifyContent="center">
        <Main />
      </HStack>
    </VStack>
  );
};

export default Dashboard;
