import {atom} from 'recoil';

// Define atoms
const authScreenAtom =  atom({
    key: 'authScreenAtom',
    default: 'login',
})

export default authScreenAtom;