import PropTypes from "prop-types";

import { ButtonGroup, Flex } from "@chakra-ui/react";
import { ButtonComponent } from "../button";

const AdminTabs = ({ activeTab, setActiveTab }) => {
  return (
    <Flex justify="center" mb={6}>
      <ButtonGroup isAttached variant="outline" transition={"ease-in 1s"}>
        <ButtonComponent
          onClick={() => setActiveTab("categories")}
          color={activeTab === "categories" ? "primary.green" : "gray"}
          bg={activeTab === "categories" ? "white" : "none"}
          _hover={{
            color: activeTab === "categories" ? "primary.green" : "white",
            bg: activeTab === "categories" ? "white" : "primary.green",
          }}
          fontWeight={activeTab === "categories" ? "bold" : "normal"}
          text={"Categorias de Exercícios"}
        />

        <ButtonComponent
          onClick={() => setActiveTab("account")}
          color={activeTab === "account" ? "primary.green" : "gray"}
          bg={activeTab === "account" ? "white" : "none"}
          _hover={{
            color: activeTab === "account" ? "primary.green" : "white",
            bg: activeTab === "account" ? "white" : "primary.green",
          }}
          fontWeight={activeTab === "account" ? "bold" : "normal"}
          text={"Configurações de Conta"}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default AdminTabs;

AdminTabs.propTypes = {
  activeTab: PropTypes.any,
  setActiveTab: PropTypes.func,
};
