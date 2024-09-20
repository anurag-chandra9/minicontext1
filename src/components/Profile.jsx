import React, {useContext} from 'react'
import UserContext from '../Context/Usercontext1'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user){ return <div>please login</div>}
    else{

    return <div>Welcome {user.username}</div>}
}

export default Profile
