import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const UsersComponent = () => {
    console.log('users')

    const [user, setUser] = useState()

    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);

    const foo = useCallback(() => {
        console.log('test')
    }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((value) => setUser(value))

        return () => {
            console.log('unsubscribe');
        }
    }, []);
    return (
        <div>
            users component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;