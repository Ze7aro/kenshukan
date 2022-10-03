import React from "react";
import {
  HStack,
  VStack,
  Stack,
  Box,
  Input,
  InputGroup,
  IconButton,
  Heading,
  Text,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Aside from "./Aside";
import Reserve from "./Reserve";
import { ColorModeSwitcher } from "../../utils/ColorModeSwitcher";

const Main = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack w="79%">
      <VStack border="1px solid transparent" mt="30px">
        <Box display="flex" position="absolute" right="40" w="20%">
          <InputGroup size="md" justifyContent="right">
            <Input placeholder="Buscar" w="100%" />
            <IconButton
              icon={<BsSearch />}
              bg={colorMode === "dark" ? "#f2f2f2" : "gray.600"}
              color={colorMode === "dark" ? "gray.600" : "#f2f2f2"}
            />
          </InputGroup>
        </Box>
        <Divider h="10px" />

        <HStack
          color="black"
          justifyContent="left"
          flexWrap="wrap"
          w="90%  "
          bg={colorMode === "dark" ? "gray.600" : "#f2f2f2"}
        >
          <Heading color="#1503ba" m="5px">
            Sobre Karate Kenshukan:
          </Heading>
          <Text p={2}>
            La Escuela Kenshukan fue fundada en la ciudad de Rosario en 1995 por
            el Licenciado Oscar Raúl Suárez, 6to Dan de Karatedo. El Sensei
            Suárez es profesor y licenciado en Educación Física, presidente de
            la Federación Rosarina de Karate y autor del libro: "Karatedo, una
            alternativa para la educación física".
          </Text>
        </HStack>
      </VStack>
      <HStack w="100%" justifyContent="space-around">
        <Box flexWrap="wrap" p={2}>
          <Reserve />
          <Divider h="10px" />
          <Aside />
        </Box>
        <Box w="800px" h="600px" textAlign="center">
          <p>Galeria inicio</p>
        </Box>
      </HStack>
    </Stack>
  );
};

export default Main;
