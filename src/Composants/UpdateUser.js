import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { updateUserAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function UpdateUser() {
    const { id } = useParams()
    const user = useSelector(data => data.users.find((u) => u.id === parseInt(id)));

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(updateUserAction({
            id: id,
            name: name,
            email: email
        }))
        navigate('/')
    }
    return (
        <form className="container">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Enregistrer</button>
        </form>
    )
}
export default UpdateUser