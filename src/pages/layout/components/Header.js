import React from "react";
import {
  HStack,
  Stack,
  Box,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import Fondo from "../../../assets/fondo.jpg";
import Logo from "../../../assets/logoKnk.jpg";
import { ColorModeSwitcher } from "../../../utils/ColorModeSwitcher";
import { Outlet } from "react-router-dom";

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack bg={colorMode === "dark" ? "gray.600" : "#f2f2f2"}>
      <HStack display="flex" justifyContent="center" flexWrap="wrap">
        <Box w="79%" h="400px">
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
        <HStack h="50px" bg="#1503ba" borderRadius="5px" w="78%">
          <Box w="168px" h="168px" ml="-5px" mb="100px">
            <Image src={Logo} borderRadius="full" boxSize="100%" />
          </Box>
          <Box>
            <Breadcrumb fontWeight="medium" fontSize="sm" separator="|">
              <BreadcrumbItem>
                <BreadcrumbLink href="dashboard">Inicio</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="explain">
                  ¿Que es karate-do?
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="places">¿Donde practicar?</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="book">
                  Karatedo: Una alternativa para la educacion fisica
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Tecnicas</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Contacto</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <ColorModeSwitcher />
        </HStack>
      </HStack>
      <Outlet />
    </Stack>
  );
};

export default Header;
