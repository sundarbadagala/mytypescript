const data = [
    { name: 'kiran', age: 23, isMajor: true, color: 'red' },
    { name: 'charan', age: 3, isMajor: false, color: 'blue' },
    { name: 'varun', age: 99, isMajor: true, color: 'green' },
    { name: 'saran', age: 23, isMajor: true, color: 'yellow' },
]

type TData = {
    name: string,
    age: number,
    isMajor: boolean,
    color: string,
}

const fnData = (data:TData[]) => {
    return data.map((item:TData) => item.name)
}

console.log(fnData(data))