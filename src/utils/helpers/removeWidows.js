function removeWidows(title) {
    if (!title) return null

    const arr = title.split(' ')
    return arr.slice(0, -1).join(' ').concat(arr.length > 1 ? "\u00A0" : '', arr.slice(-1));
}

export default removeWidows