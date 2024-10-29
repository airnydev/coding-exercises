function position(letter) {
  // character code of 'a' is 97
  return `Position of alphabet: ${letter.charCodeAt() - 96}`
}

export { position }