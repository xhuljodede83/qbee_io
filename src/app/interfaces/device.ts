import { ITag } from "./tag";

export interface IDevice{
  id?: number;
	name: string;
	tags: ITag[];
	description: string;
}
