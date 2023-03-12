// creating action using Action creator function
export const incNum = () => {
    return {
        type: "INCREMENET"
    }
}

// exporting the action creator functions
export const decNum = () => {
    return {
        type: "DECREMENT"
    }
}