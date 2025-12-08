import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type {IUser} from "../../models/Ireqres.ts";
import {getAllUsers} from "../../service/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";

const UsersComponent = () => {
    const [query] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAllUsers(query.get('pg') || '1').then(value => setUsers(value.data));
    }, [query]);
    return (
        <div>
            {
                users.map((value) => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default UsersComponent;