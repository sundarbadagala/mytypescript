const details = {
    name: 'vijay',
    age: 23,
    isMajor: true
}

type TDetails = {
    name: string,
    age: number,
    isMajor: boolean
}

const fnOne = (details: TDetails): string => {
    return `name ${details.name}, age ${details.age}, is major ${details.isMajor ? 'yes' : 'no'}`
}

// console.log(fnOne(details))

//================================================================================================

const detailsOps = {
    name: 'vijay',
}
const detailsOpsTwo = {
    name: 'vijay',
    age: 23
}

type TDetailsOps = {
    name: string,
    age?: number,
    isMajor?: boolean
}

const fnTwo = (details: TDetailsOps): string => {
    return `name ${details.name}, age ${details.age}, is major ${details.isMajor ? 'yes' : 'no'}`
}
// console.log(fnTwo(detailsOps))
// console.log(fnTwo(detailsOpsTwo))