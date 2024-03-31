import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUserAction } from '../Config/actions'

function UserList() {

    const users = useSelector((data) => data.users);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUserAction(id))
    }
    return (
        <div className="container mt-5">

            <p className="mt-5">
                <Link to="/add-user">
                    <button className="btn btn-primary">Add user</button>
                </Link>
            </p>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/update-user/${user.id}`} className="btn btn-warning ">Edit</Link> <i></i>
                                <button
                                    onClick={() => {
                                        if (window.confirm('Are you sure you want to delete this user?')) {
                                            handleDelete(user.id);
                                        }
                                    }}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default UserList