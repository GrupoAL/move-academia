import { Flex, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonComponent } from "../../components/button";
import { ListComponent } from "../../components/listOptions";
import { useSelectedOption } from "../../contexts/selectedOptions";
import theme from "../../themes";
import { listItems } from "../../Utils";
import { VideoPlayerPage } from "../videoPlayer";

export const DashboardPage = () => {
  const userName = "Usuário";
  const { selectedOption, setSelectedOption } = useSelectedOption();

  const params = useParams();
  const navigate = useNavigate();

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
          w={{
            base: "80%",
            sm: "450px",
            md: "450px",
            lg: "450px",
            xl: "450px",
          }}
          gap={6}
          mt="3rem"
        >
          <Text
            fontWeight={700}
            fontSize="2xl"
            letterSpacing={"1px"}
            color={theme.colors.white}
          >
            Olá, {userName}!
          </Text>
          <Flex direction="column" w="100%" gap={3}>
            {listItems.map((el) => (
              <ButtonComponent
                key={el.categoria}
                text={el.categoria}
                h="60px"
                fontSize="md"
                fontWeight={700}
                fontStyle="italic"
                bg="primary.white"
                color="primary.bg"
                letterSpacing={"1px"}
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
