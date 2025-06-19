import { Button, Fade, Flex, SlideFade, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonComponent } from "../../components/button";
import { ListComponent } from "../../components/listOptions";
import { useSelectedOption } from "../../contexts/selectedOptions";
import theme from "../../themes";
import { listItems } from "../../Utils";
import { VideoPlayerPage } from "../videoPlayer";
import { useRegister } from "../../hooks/useAuthQuery";
import { useAppContext } from "../../contexts";
// import { useAppContext } from "../../contexts";

export const DashboardPage = () => {
  const userName =
    localStorage.getItem("@moveAcademy:user").split(" ")[0] || "Usuário";

  const { selectedOption, setSelectedOption } = useSelectedOption();

  // const { data } = usePing();
  // const {  } = useAppContext();

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
          justifySelf={"center"}
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
          <Fade in transition={{ enter: { duration: 1 } }}>
            <Text
              fontWeight={700}
              fontSize="2xl"
              letterSpacing={"1px"}
              color={theme.colors.white}
            >
              Olá, {userName}!
            </Text>
          </Fade>
          <Flex direction="column" w="100%" gap={3}>
            {listItems.map((el, i) => (
              <SlideFade
                key={el.categoria}
                in
                transition={{ enter: { duration: (i + 1) / 8 } }}
                offsetX={"30px"}
                offsetY={"0"}
              >
                <ButtonComponent
                  text={el.categoria}
                  h="60px"
                  w={"full"}
                  fontSize="md"
                  fontWeight={700}
                  bg="primary.white"
                  color="primary.bg"
                  letterSpacing={"1px"}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedOption(el);
                    navigate(`/dashboard/${el.categoria}`);
                  }}
                />
              </SlideFade>
            ))}
          </Flex>
        </Flex>
      );
    }

    if (params.activite && params.choice) {
      return <VideoPlayerPage videoId="c_3j9CYlwlI" />;
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
