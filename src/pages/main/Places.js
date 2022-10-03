import React from "react";
import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";

const Places = () => {
  return (
    <Stack w="78%" alignSelf="center">
      <Box w="100%" textAlign="center">
        <Text fontWeight="bold" fontSize="5xl" letterSpacing={3}>
          Dojos
        </Text>
      </Box>

      <Accordion allowMultiple w="100%" p={6}>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Sede principal - Sarmiento 1670, Sensei: Oscar Suárez
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <GrAdd fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Lunes</Th>
                        <Th>Martes</Th>
                        <Th>Miercoles</Th>
                        <Th>Jueves</Th>
                        <Th>Viernes</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                      </Tr>
                      <Tr>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <GrAdd fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Lunes</Th>
                        <Th>Martes</Th>
                        <Th>Miercoles</Th>
                        <Th>Jueves</Th>
                        <Th>Viernes</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                      </Tr>
                      <Tr>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <GrAdd fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Lunes</Th>
                        <Th>Martes</Th>
                        <Th>Miercoles</Th>
                        <Th>Jueves</Th>
                        <Th>Viernes</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                      </Tr>
                      <Tr>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <GrAdd fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Lunes</Th>
                        <Th>Martes</Th>
                        <Th>Miercoles</Th>
                        <Th>Jueves</Th>
                        <Th>Viernes</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                      </Tr>
                      <Tr>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <GrAdd fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Lunes</Th>
                        <Th>Martes</Th>
                        <Th>Miercoles</Th>
                        <Th>Jueves</Th>
                        <Th>Viernes</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                      </Tr>
                      <Tr>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <GrAdd fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Lunes</Th>
                        <Th>Martes</Th>
                        <Th>Miercoles</Th>
                        <Th>Jueves</Th>
                        <Th>Viernes</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                        <Td></Td>
                        <Td>11:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                        <Td>14:00 - Adultos</Td>
                      </Tr>
                      <Tr>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                        <Td>18:30 - Adultos (principiantes)</Td>
                        <Td>18:30 - Infantiles/Juveniles</Td>
                      </Tr>
                      <Tr>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Infantiles/Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                        <Td>19:30 - Adultos</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default Places;
