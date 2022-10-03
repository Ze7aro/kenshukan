import React from "react";
import { Text, Heading, Image, Box } from "@chakra-ui/react";
import Libro from "../../assets/libroo.jpg";

const Book = () => {
  return (
    <Box
      textAlign="center"
      w="75%"
      p={8}
      border="5px solid transparent"
      alignSelf="center"
    >
      <Text fontSize="5xl">
        Karatedo: Una alternativa para la educación física
      </Text>
      <Text textAlign="left">
        «Karatedo: Una alternativa para la Educación Física» es un libro de
        carácter pedagógico que intenta reivindicar al Karatedo en su aspecto
        educativo y tiene como propósito propiciar el conocimiento y
        entendimiento del karatedo como alternativa para la educación física.
        <br /> <Image src={Libro} float="right" />
        <br />
        Autor: Oscar Raúl Suárez es oriundo de la ciudad de Rosario, Provincia
        de Santa Fe, Argentina. Profesor y Licenciado en Educación Física; 6to
        Dan de Karatedo, Fundador de la Asociación Escuela Kenshukan Argentina y
        Presidente de la Federación Rosarina de Karatedo.
        <br />
        <br />
        Además es autor de los artículos: Pirámide deportiva para Karatedo y
        Código de Karate deportivo para estructurar el funcionamiento deportivo
        en la Federación Rosarina de Karatedo.
      </Text>
    </Box>
  );
};

export default Book;
