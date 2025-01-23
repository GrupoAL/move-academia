// Main Pages

// Internal Pages
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RecoverPasswordPage } from "../pages/recoverPassword";
import { VideoPlayerPage } from "../pages/videoPlayer";

export const RoutesData = [
  {
    route: "/",
    type: "off",
    component: LoginPage,
  },
  {
    route: "/recoverPassword",
    type: "off",
    component: RecoverPasswordPage,
  },
  {
    route: "/dashboard",
    type: "logged",
    component: DashboardPage,
  },
  {
    route: "/dashboard/:activite",
    type: "logged",
    component: DashboardPage,
  },
  {
    route: "/dashboard/:activite/:choice",
    type: "logged",
    component: DashboardPage,
  },
  {
    route: "/player",
    title: "logged",
    component: VideoPlayerPage,
  },
];
{
  /* <>
{!params?.id ? (
  <Flex
    direction={"column"}
    alignSelf={"start"}
    w={"80%"}
    gap={6}
    mt={"40px"}
  >
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
          bg={"primary.white"}
          color={"primary.bg"}
          onClick={(e) => {
            e.preventDefault();
            setSelectedOption(el);
            navigate(`/dashboard/${el.categoria}`);
          }}
        />
      ))}
    </Flex>
  </Flex>
) : (
  <>
    {selectedOption  && (
      <ListComponent
        title={selectedOption.categoria}
        array={selectedOption.itens}
      />
    )}
  </>
)}
</> */
}
