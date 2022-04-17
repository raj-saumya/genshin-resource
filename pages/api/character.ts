import type { NextApiRequest, NextApiResponse } from "next";
import { ICharacterInfo } from "../../shared/interfaces";
import data from "../../_data/character.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICharacterInfo[]>
) {
  res.status(200).json(data);
}
