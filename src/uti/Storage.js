// export default localStorage
// import storage from 'react-native-sync-storage'

// export default localStorage = () => {
//     const qrCode = storage.set 
// }




// import { AsyncStorage } from 'react-native'

let getState = async () => {
    let savedState = await storage.getItem('state')
    if (savedState) {
        return JSON.parse(savedState)
    }

    return {}
}

let saveState = (state) => {
    return storage.setItem('state', JSON.stringify(state))
}

class Storage {
    cache = {}

    init = new Promise(async (resolve, reject) => {
        this.cache = await getState()
        resolve()
    })

    async get(property) {
        console.log('--------------------------papapapap: ', property)
        return this.cache[property]
    }

    async set(property, value) {
        if (this.cache[property] === value) return

        this.cache[property] = value

        await saveState(this.cache)

        return true
    }

    async remove(property) {
        delete this.cache[property]

        await saveState(this.cache)

        return true
    }
}

export default new Storage()