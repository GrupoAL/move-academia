import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonComponent } from "../../components/button";
import theme from "../../themes";

const options = ["EXERCÍCIOS", "GRUPOS MUSCULARES", "APARELHOS"];

export const DashboardPage = () => {
  const userName = "Sidny";
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      {selectedOption === "" && (
        <Flex direction={"column"} w={"80%"} gap={6}>
          <Text fontWeight={700} fontSize="2xl" color={theme.colors.white}>
            Olá,{userName}!
          </Text>
          <Flex direction={"column"} w={"100%"} gap={3}>
            {options.map((el) => (
              <ButtonComponent
                key={el}
                text={el}
                h={"60px"}
                fontSize="md"
                fontWeight={700}
                fontStyle={"italic"}
                onClick={() => setSelectedOption(el)}
              />
            ))}
          </Flex>
          )}
          {selectedOption === "EXERCÍCIOS" && <>EXERCÍCIOS</>}
          {selectedOption === "GRUPOS MUSCULARES" && <>GRUPOS MUSCULARES</>}
          {selectedOption === "APARELHOS" && <>APARELHOS</>}
        </Flex>
      )}
    </>
  );
};
