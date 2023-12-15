import React from 'react'

interface User {
    id: string;
    name: string;
    email: string;
}

const UserTable =  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'});   
const users: User[] = await res.json()
    return (
    <table className='table table-border'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => <tr key={user.id}>
                <td className=''>{user.name}</td>
                <td>{user.email}</td>
                </tr> )}
        </tbody>
        </table>
  )
}

export default UserTable