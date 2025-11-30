import type {ICharacter} from "../../models/ICharacter.ts";
import type {ReactNode} from "react";
import "./CharacterComponent.css"

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='my-10 border-1'>
            <h3 className='text-2xl'>{item.name} {item.name}</h3>
            <img src={item.photo} alt={item.name} />
            <p>{children}</p>
        </div>
    );
};