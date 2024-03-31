const initialState = {
    users: [
        { id: 1, name: "Mohamed Allaoui", email: "allaoui@gmail.com" },
        { id: 2, name: "Hind Benanni", email: "benani@gmail.com" }
    ]
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_user":
            return { ...state, users: [...state.users, action.payload] }
        case "Update_user":
            const { id, name, email } = action.payload
            const user = state.users.find((u) => u.id === parseInt(id))
            if (user) {
                user.name = name
                user.email = email
            }
            return state
        case "Delete_user":
            return { ...state, users: [...state.users.filter((u) => u.id !== parseInt(action.payload))] }
        default:
            return state
    }
}
export default reducer