import { useState } from "react";
import { NextPage } from "next/types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
  DropResult,
} from "react-beautiful-dnd";
import data from "../_data/character.json";
import { ICharacterInfo, IMeta } from "../shared/interfaces";
import LayoutWrapper from "../components/LayoutWrapper";
import CharacterDnDFace from "../components/CharacterDnDFace";

export const getServerSideProps = async () => {
  //   const characterList: ICharacterInfo[] = await (
  //     await fetch(`http://localhost:3000/api/character`)
  //   ).json();
  resetServerContext();
  return { props: { characterList: data } };
};

interface ITierList {
  characterList: ICharacterInfo[];
}

const TierList: NextPage<ITierList> = ({ characterList }) => {
  const meta: IMeta = {
    title: "Tier list",
    description: "Create your own tier list",
  };

  const [characters, setCharacters] = useState(characterList);

  const handleOnDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCharacters(items);
  };

  return (
    <LayoutWrapper meta={meta}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-[#1d1d1d] p-4 rounded-lg w-fit flex overflow-x-auto"
            >
              {characters.map((d, index) => (
                <Draggable key={d.id} draggableId={d.id} index={index}>
                  {(provided) => (
                    <CharacterDnDFace provided={provided} {...d} />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </LayoutWrapper>
  );
};

export default TierList;
