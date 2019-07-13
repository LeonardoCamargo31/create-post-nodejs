const extractError = (error) => {
    const errors = error.errors.reduce((prev, curr) => {
        const res = {
            message: curr.message,
            path: curr.path
        }
        prev.push(res)
        return prev
    }, [])
    return errors
}

module.exports = extractError