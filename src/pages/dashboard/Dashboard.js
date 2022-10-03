import React from "react";
import Main from "../main/Main";
import {
  VStack,
  Box,
  Button,
  HStack,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import QueryMain from "../main/Querymain";

const Dashboard = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const [is1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      {is1280 ? (
        <VStack w="100%" bg={colorMode === "dark" ? "gray.600" : "#f2f2f2"}>
          <HStack w="100%" display="flex" justifyContent="center">
            <Main />
          </HStack>
        </VStack>
      ) : (
        <VStack w="100%" bg={colorMode === "dark" ? "gray.600" : "#f2f2f2"}>
          <HStack w="100%" display="flex" justifyContent="center">
            <QueryMain />
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default Dashboard;
