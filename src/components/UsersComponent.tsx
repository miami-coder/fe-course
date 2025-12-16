import {UserComponent} from "./UserComponent.tsx";
import {useEffect} from "react";

const UsersComponent = () => {
    console.log('users')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((value) => console.log(value))
    }, []);
    return (
        <div>
            users component
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;