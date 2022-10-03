import React from "react";
import {
  HStack,
  Stack,
  Box,
  Image,
  Button,
  useMediaQuery,
  Tooltip,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Fondo from "../../../assets/fondo.jpg";
import Logo from "../../../assets/logoKnk.jpg";
import { ColorModeSwitcher } from "../../../utils/ColorModeSwitcher";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const { colorMode } = useColorMode();
  const [is1280] = useMediaQuery("(min-width: 1280px)");
  const navigate = useNavigate();
  return (
    <>
      {is1280 ? (
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
      ) : (
        <Stack>
          <HStack w="100%" display="flex" justifyContent="center">
            <Image src={Logo} borderRadius="full" w="168px" h="168px" />
          </HStack>
          <Menu>
            <MenuButton as={Button} bg="#1503ba">
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  navigate("../dashboard", { replace: true });
                }}
              >
                Inicio
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("../explain", { replace: true });
                }}
              >
                ¿Que es karate-do?
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("../places", { replace: true });
                }}
              >
                ¿Donde practicar?
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("../book", { replace: true });
                }}
              >
                Una alternativa para la educacion fisica
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("../dashboard", { replace: true });
                }}
              >
                Kenshukan a traves de los años
              </MenuItem>
              <MenuItem>
                <ColorModeSwitcher size="sm" />
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      )}
    </>
  );
};

export default Header;
