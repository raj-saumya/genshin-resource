import type { NextPage } from "next";
import { IMeta } from "../shared/interfaces";
import LayoutWrapper from "../components/LayoutWrapper";
import NavCard from "../components/NavCard";

const Home: NextPage = () => {
  const meta: IMeta = {
    title: "Genshin",
    description: "Genshin resources",
  };

  const navList = [
    {
      title: "Randomizer",
      descp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do",
      path: "/randomizer",
    },
    {
      title: "Tier List",
      descp:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, setion ullamco laboris nis",
      path: "/tierlist",
    },
  ];

  return (
    <LayoutWrapper meta={meta}>
      <div className="flex flex-col items-center p-10 sm:flex-row sm:justify-center">
        {navList.map(({ title, descp, path }) => (
          <NavCard key={title} title={title} descp={descp} path={path} />
        ))}
      </div>
    </LayoutWrapper>
  );
};

export default Home;
