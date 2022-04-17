import { NextPage } from "next/types";
import { IMeta } from "../shared/interfaces";
import LayoutWrapper from "../components/LayoutWrapper";

const Randomizer: NextPage = () => {
  const meta: IMeta = {
    title: "Randomizer",
    description: "Get randomized character/weapon set",
  };

  return (
    <LayoutWrapper meta={meta}>
      <label className="font-mono text-white text-base">Randomizer</label>
    </LayoutWrapper>
  );
};

export default Randomizer;
