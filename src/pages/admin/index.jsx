import { useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import CategoryForm from "../../components/adminPanel/categoryForm";
import AccountSettings from "../../components/adminPanel/accountSettings";
import AdminTabs from "../../components/adminPanel/adminTabs";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("categories");

  return (
    <Box
      className="ADMIN"
      minW={{ base: "328px" }}
      w={"auto"}
      maxW="1200px"
      mx="auto"
      p={5}
      bg="black"
    >
      <VStack spacing={{ base: 2, md: 6 }} align="stretch">
        <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md">
          {activeTab === "categories" && <CategoryForm />}
          {activeTab === "account" && <AccountSettings />}
        </Box>
      </VStack>
    </Box>
  );
};

export default AdminPage;
