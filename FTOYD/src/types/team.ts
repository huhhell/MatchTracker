import {IPlayer} from "./IPlayer.ts";

export interface ITeam {
    name: string;
    players: IPlayer[];
    points: number;
    place: number;
    total_kills: number;
}