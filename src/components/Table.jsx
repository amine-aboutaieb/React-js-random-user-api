import React from 'react'

function Table({ user }) {

    return (
        <div>
            <img src={user.picture.large} alt="" />
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td>{user.gender}</td>
                        <td>{user.dob.age}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.location.country}</td>
                        <td>{user.location.city}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );


}

export default Table;