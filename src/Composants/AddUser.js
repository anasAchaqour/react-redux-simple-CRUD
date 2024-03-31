import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";
function AddUser() {
    const count = useSelector(data => data.users.length);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addUserAction({
            id: count + 1,
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
export default AddUser