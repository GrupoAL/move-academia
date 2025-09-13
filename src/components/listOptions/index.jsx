import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  List,
  ListItem,
  SlideFade,
  useBreakpointValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { useSelectedOption } from "../../contexts/selectedOptions";
import { useEffect, useRef, useState } from "react";
import { CanScrollComponent } from "../handleScroller";
import { useAppContext } from "../../contexts";

export const ListComponent = ({ title, array }) => {
  const navigate = useNavigate();
  const params = useParams();
  const scrollRef = useRef();

  const { selectedOption, setSelectedExercise } = useSelectedOption();

  const [stack, setStack] = useState([{ title, items: array }]);

  const current = stack[stack.length - 1];

  const { setCanReturn } = useAppContext();

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

  useEffect(() => {
    if (stack.length >= 2) {
      setCanReturn(false);
      return;
    }
    setCanReturn(true);
  }, [stack, setCanReturn]);

  const handleBreadcrumbClick = (index) => {
    const newStack = stack.slice(0, index + 1);
    setStack(newStack);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

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
      <Flex gap={4} flexDir={"column"} transition={".3s"} width={"fit-content"}>
        <Breadcrumb
          separator=">"
          fontWeight="medium"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
        >
          {stack.map((level, index) => {
            const realIndex = index;
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
                  fontSize={{ base: "md", md: "lg", lg: "xl", "2xl": "3xl" }}
                  cursor="pointer"
                >
                  {isMobile && realIndex !== stack.length - 1
                    ? level.title.slice(0, 4).concat("...")
                    : level.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </Flex>

      <Flex position="relative" width={"fit-content"} h={"100%"}>
        <CanScrollComponent scrollRef={scrollRef}>
          <List
            ref={scrollRef}
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            sx={{
              maxHeight: "clamp(30vh, 60vh, 80vh)",
            }}
            overflowY={"auto"}
          >
            {current.items.map((item, i) => (
              <SlideFade
                key={i}
                in
                transition={{ enter: { duration: i <= 20 ? (i + 1) / 8 : 0 } }}
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
        </CanScrollComponent>
      </Flex>
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
