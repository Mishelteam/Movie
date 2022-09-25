const massiv = []

function Checked(state = massiv, action) {
    console.log(action);
    if (action.type === "add") {
        let currentMassiv = [...state]
        currentMassiv.push(action.payload)

        state = currentMassiv
        return state
    }
    return state
}

export {Checked}