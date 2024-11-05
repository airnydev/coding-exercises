function position(letter) {
  // utf-16 character codes start at 97 for 'a'
  let position = letter.charCodeAt(0) - 96
  return `Position of alphabet: ${position}`
}

export { position }