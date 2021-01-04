var store = require('store');

const localstore = () => {
    const localKey = process.env.NEXT_PUBLIC_LOCALSTORAGEKEY;
    return {
        set: (key, data) => {
            console.log(localKey + key);
            store.set(localKey + key, data);
        },
        get: (key) => {
            return store.get(localKey + key);
        },
        remove: (key) => {
            store.remove(localKey + key);
        },
        clearAll: () => {
            store.clearAll();
        },
    }
};

export default localstore();
