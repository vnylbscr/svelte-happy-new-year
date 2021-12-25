const generateId = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

const timeBetweenDates = (endDate) => {
  const endTime = endDate.getTime()

  const now = new Date().getTime()
  const difference = endTime - now

  if (difference <= 0) {
    return null
  } else {
    const dates = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    return {
      seconds,
      minutes,
      hours,
      dates,
    }
  }
}

export { generateId, timeBetweenDates }
