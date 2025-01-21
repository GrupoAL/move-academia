import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonComponent } from "../../components/button";
import { ListComponent } from "../../components/listOptions";
import theme from "../../themes";

const data = [
  {
    categoria: "Exercícios",
    itens: [
      "Leg Curl",
      "Leg Extension",
      "Supino Reto com Halter",
      "Supino Reto com Barra",
      "Supino Inclinado com Crucifixo",
      "Mobilidade 9090",
      "Mobilidade com Elástico",
      "Mobilidade com Bastão",
    ],
  },
  {
    categoria: "Grupos Musculares",
    itens: [
      "Quadríceps",
      "Isquiotibiais",
      "Peitoral",
      "Latíssimo",
      "Dorsais",
      "Glúteo",
      "Adutores",
      "Abdominais",
    ],
  },
  {
    categoria: "Aparelhos",
    itens: [
      "Low Row",
      "Reverse Fly",
      "D.A.P",
      "Cross Over",
      "Row Pure",
      "Shoulder Press Pure",
      "Banco Abdutor",
      "Banco Adutor",
    ],
  },
];

export const DashboardPage = () => {
  const userName = "Sidny";
  const [selectedOption, setSelectedOption] = useState("");

  addEventListener("keydown", (e) => {
    if (e.code === "Numpad8") {
      setSelectedOption("");
    }
  });
  return (
    <>
      {selectedOption === "" && (
        <Flex direction={"column"} w={"80%"} gap={6}>
          <Text fontWeight={700} fontSize="2xl" color={theme.colors.white}>
            Olá, {userName}!
          </Text>
          <Flex direction={"column"} w={"100%"} gap={3}>
            {data.map((el) => (
              <ButtonComponent
                key={el.categoria}
                text={el.categoria}
                h={"60px"}
                fontSize="md"
                fontWeight={700}
                fontStyle={"italic"}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOption(el);
                }}
              />
            ))}
          </Flex>
        </Flex>
      )}
      {selectedOption && (
        <ListComponent
          title={selectedOption.categoria}
          array={selectedOption.itens}
        />
      )}
    </>
  );
};
