export const inNumber = (num) =>{
    return{
        type : "INCREMENT",
        payload: num
    }
}
export const deNumber = (num) =>{
    return{
        type : "DECREMENT",
        payload: num
    }
}