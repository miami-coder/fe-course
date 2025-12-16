import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

const UsersComponent = () => {
    const [user, setUser] = useState()

    const foo = useCallback(() => {
        console.log('test')
    }, [])

    console.log('users')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((value) => setUser(value))
    }, []);
    return (
        <div>
            users component
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;