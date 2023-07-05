const datanull = [
    { name: 'kiran', age: 23, isMajor: true, color: null },
    { name: 'charan', age: 3, isMajor: false, color: 'blue' },
    { name: 'varun', age: 99, isMajor: true, color: null },
    { name: 'saran', age: 23, isMajor: true, color: 'yellow' },
]

type TDataNull = {
    name: string;
    age: number;
    isMajor: boolean;
    color: string | null;
} 

const fnDataNull = (data: TDataNull[]) => {
    return data.map((item: TDataNull) => item.color)
}

console.log(fnDataNull(datanull))