import { storageService } from "./storage.service"

const USER_STORAGE_KEY = 'user'


export const userService = {
    getUser,
    // signup,
    // remove,
    addMove,
    getMoves,
}


function getUser() {
    let user = storageService.load(USER_STORAGE_KEY)
    if (!user || !user.length) user = { name: "Ochoa Hyde", coins: 100, moves: [] }
    storageService.save(USER_STORAGE_KEY, user)
    return user
    // return storageService.load(USER_STORAGE_KEY) || null
}

// function signup(name) {
//     const user = {
//         name: name,
//         coins: 100,
//         moves: [],
//     }
//     storageService.save(USER_STORAGE_KEY, user)
//     return Promise.resolve(user)
// }

// function remove() {
//     storageService.save(USER_STORAGE_KEY, null)
// }

function addMove(contact, amount) {
    console.log(`amount:`, amount)
    const loggedinUser = getUser()
    const balance = loggedinUser.coins

    if (amount > balance) return null

    const move = {
        _id: _makeId(),
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
    }

    loggedinUser.coins -= amount
    loggedinUser.moves.push(move)
    console.log(`loggedinUser:`, loggedinUser)

    storageService.save(USER_STORAGE_KEY, loggedinUser)
    return loggedinUser
}

function getMoves() {
    const user = getUser()
    return user.moves
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}