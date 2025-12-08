import type {Ireqres} from "../models/Ireqres.ts";

export const getAllUsers = async (pg: string): Promise<Ireqres> => {
    return await fetch('https://reqres.in/api/users?page=' + pg, {
        headers: {'x-api-key': 'reqres_6fade82b77b44251bb6b15163d388b74'}
    })
        .then((response) => response.json());
}