import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  List,
  ListItem,
  SlideFade,
  useBreakpointValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const ListComponent = ({ title, array }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { selectedOption, setSelectedExercise } = useSelectedOption();

  const [stack, setStack] = useState([{ title, items: array }]);

  const current = stack[stack.length - 1];

  useEffect(() => {
    setStack([{ title, items: array }]);
  }, [selectedOption, setStack, title, array]);

  const handleItemClick = (item) => {
    if (item.itens) {
      setStack([...stack, { title: item.nome, items: item.itens }]);
    } else {
      setSelectedExercise(item.nome);
      navigate(
        `/dashboard/${params.activite}/${encodeURIComponent(item.nome)}`
      );
    }
  };

  const handleBreadcrumbClick = (index) => {
    const newStack = stack.slice(0, index + 1);
    setStack(newStack);
  };

  const handleGoBack = () => {
    if (stack.length > 1) {
      const newStack = stack.slice(0, stack.length - 1);
      setStack(newStack);
    }
  };
  const isMobile = useBreakpointValue({ base: true, md: false });

  const breadcrumbItems = isMobile ? [stack[stack.length - 1]] : stack;

  return (
    <Flex
      direction={"column"}
      color="primary.white"
      alignSelf={"start"}
      w={"full"}
      pt={"40px"}
      pl={{ base: "2rem", sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
      pr={2}
      gap={5}
    >
      <Flex align="center" gap={4}>
        <Breadcrumb
          separator=">"
          fontWeight="medium"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
        >
          {/* Botão Voltar */}
          {isMobile && stack.length > 1 && (
            <Button
              leftIcon={<ChevronLeftIcon />}
              size="lg"
              color="primary.white"
              onClick={handleGoBack}
              w={"24px"}
              minW={"24px"}
              h={"24px"}
              minH={"24px"}
              bg={"transparent"}
              p={0}
              border={"none"}
              _hover={"none"}
              sx={{ span: { m: 0 } }}
            ></Button>
          )}
          {breadcrumbItems.map((level, index) => {
            const realIndex = isMobile ? stack.length - 1 : index;
            return (
              <BreadcrumbItem key={realIndex}>
                <BreadcrumbLink
                  onClick={() => handleBreadcrumbClick(realIndex)}
                  _hover={{
                    color: "primary.green",
                    textDecoration: "underline",
                  }}
                  color={
                    realIndex === stack.length - 1
                      ? "primary.white"
                      : "primary.green"
                  }
                  fontSize={"lg"}
                  cursor="pointer"
                >
                  {level.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>

        {/* <Text
          color="primary.white"
          fontSize={{
            base: "2xl",
            sm: "2xl",
            md: "48px",
            lg: "64px",
            xl: "64px",
          }}
          fontWeight={700}
          letterSpacing={"2px"}
        >
          {current.title}
        </Text> */}
      </Flex>

      <List display={"flex"} flexDirection={"column"} gap={3}>
        {current.items.map((item, i) => (
          <SlideFade
            key={i}
            in
            transition={{ enter: { duration: (i + 1) / 8 } }}
            offsetX={"-30px"}
            offsetY={"0"}
          >
            <ListItem
              w={"fit-content"}
              fontSize={{
                base: "md",
                sm: "md",
                md: "lg",
                lg: "lg",
                xl: "2xl",
              }}
              letterSpacing={"1px"}
              fontWeight={600}
              borderBottom="0.5px solid"
              transition=".3s"
              _hover={{ cursor: "pointer", color: "primary.green" }}
              onClick={() => handleItemClick(item)}
            >
              {item.nome}
            </ListItem>
          </SlideFade>
        ))}
      </List>
    </Flex>
  );
};

ListComponent.propTypes = {
  title: PropTypes.string,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
};
