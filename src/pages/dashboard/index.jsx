import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonComponent } from "../../components/button";
import { ListComponent } from "../../components/listOptions";
import theme from "../../themes";
import { VideoPlayerPage } from "../videoPlayer";

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
  const userName = "Usuário";
  const [selectedOption, setSelectedOption] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  console.log({ params });

  addEventListener("keydown", (e) => {
    if (e.code === "Numpad8") {
      setSelectedOption("");
    }
  });

  const renderMainContent = () => {
    if (!params.activite) {
      return (
        <Flex
          direction="column"
          alignSelf="start"
          w={{ base: "80%", sm: "450px", md: "450px", lg: "550px" }}
          gap={6}
          mt="40px"
        >
          <Text fontWeight={700} fontSize="2xl" color={theme.colors.white}>
            Olá, {userName}!
          </Text>
          <Flex direction="column" w="100%" gap={3}>
            {data.map((el) => (
              <ButtonComponent
                key={el.categoria}
                text={el.categoria}
                h="60px"
                fontSize="md"
                fontWeight={700}
                fontStyle="italic"
                bg="primary.white"
                color="primary.bg"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOption(el);
                  navigate(`/dashboard/${el.categoria}`);
                }}
              />
            ))}
          </Flex>
        </Flex>
      );
    }

    if (params.activite && params.choice) {
      return <VideoPlayerPage videoId="RVg8T5fakjI" />;
    }

    if (selectedOption) {
      return (
        <ListComponent
          title={selectedOption.categoria}
          array={selectedOption.itens}
        />
      );
    }

    return null;
  };

  return <>{renderMainContent()}</>;
};
