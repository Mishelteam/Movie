const massiv = []

function ChekedWatchlist(state = massiv, action) {
    console.log(action);
    if (action.type === "addWacchlist") {
        let currentMassiv = [...state]
        currentMassiv.push(action.payload)

        state = currentMassiv
        return state
    }
    return state
}

export {ChekedWatchlist}