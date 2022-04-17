import { NextPage } from "next/types";
import Image from "next/image";
import { ICharacterInfo } from "../shared/interfaces";
import { DraggableProvided } from "react-beautiful-dnd";

interface IProps extends ICharacterInfo {
  provided: DraggableProvided;
}

const CharacterDnDFace: NextPage<IProps> = ({ provided, name, faceIcon }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="flex flex-col items-center w-fit select-none mx-2"
    >
      <Image
        src={faceIcon}
        width={64}
        height={64}
        layout="fixed"
        alt={`icon-${name}`}
      />
      <label className="font-mono text-gray-400 text-sm mt-2">{name}</label>
    </div>
  );
};

export default CharacterDnDFace;
