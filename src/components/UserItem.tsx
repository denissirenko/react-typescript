import React, {FC} from 'react'
import {IUser} from "../types/types"

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}


const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div 
            onClick = {() => onClick(user)}
            key={user.id} style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.name} живет по адресу {user.address.city}, {user.address.street}, {user.address.zipcode}
        </div>
    )
}

export default UserItem
