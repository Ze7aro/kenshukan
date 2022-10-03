import React from "react";
import {
  HStack,
  Stack,
  Box,
  Image,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import Fondo from "../../../assets/fondo.jpg";
import Logo from "../../../assets/logoKnk.jpg";
import { ColorModeSwitcher } from "../../../utils/ColorModeSwitcher";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Stack bg={colorMode === "dark" ? "gray.600" : "#f2f2f2"}>
      <HStack display="flex" justifyContent="center" flexWrap="wrap">
        <Box w="81%" h="400px" ml="10px">
          <Tooltip
            label="XXI Torneo de Karate Kenshukan"
            placement="top"
            bg="gray.300"
            color="black"
          >
            <Image
              borderRadius="5px"
              boxSize="100%"
              objectFit="cover"
              src={Fondo}
              alt="XXI Torneo de Karate Kenshukan"
            />
          </Tooltip>
        </Box>
        <HStack h="50px" bg="#1503ba" borderRadius="5px" w="81%">
          <Box w="168px" h="168px" ml="-5px" mb="100px">
            <Image src={Logo} borderRadius="full" boxSize="100%" />
          </Box>
          <HStack>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("../dashboard", { replace: true });
              }}
            >
              Inicio
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("../explain", { replace: true });
              }}
            >
              ¿Que es karate-do?
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("../places", { replace: true });
              }}
            >
              ¿Donde practicar?
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("../book", { replace: true });
              }}
            >
              Karatedo: Una alternativa para la educacion fisica
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                navigate("../dashboard", { replace: true });
              }}
            >
              Tecnicas
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                window.scrollTo({
                  top: 5000,
                  left: 0,
                  behavior: "auto",
                });
              }}
            >
              Contacto
            </Button>
          </HStack>

          <ColorModeSwitcher size="sm" />
        </HStack>
      </HStack>
      <Outlet />
    </Stack>
  );
};

export default Header;
