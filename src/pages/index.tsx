import { type NextPage } from "next";
import { AppShell, Header } from "@mantine/core";
import { HeaderMegaMenu } from "../components/HeaderMegaMenu";

const Home: NextPage = () => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <HeaderMegaMenu />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
};

export default Home;

