import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModal.ts";

type PropType = { todo: TodoModel };
export const Todo: FC<PropType> = ({todo: {title, id, userId, completed}}) => {
    return (
        <div>{id} {title} {userId} {completed.toString()}</div>
    );
};