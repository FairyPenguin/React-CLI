// Waiting period in melli-seconds

const waitingPeriod = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))


export default waitingPeriod