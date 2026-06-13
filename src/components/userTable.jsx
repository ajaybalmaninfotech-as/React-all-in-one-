import React from 'react'

const UserTable = ({user}) => {
  return (
    <div>
            <table>
        <thead>
          <tr>
            <th>id:</th>
            <th>name:</th>
            <th>userName:</th>
            <th>email:</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((d, index) => (
            <tr key={index}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
