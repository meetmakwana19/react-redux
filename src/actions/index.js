// creating action using Action creator function
export const incNum = () => {
    // export const incNum = (num) => {
    return {
        type: "INCREMENET",
        // payload: num
    }
}

// exporting the action creator functions
export const decNum = () => {
    return {
        type: "DECREMENT"
    }
}