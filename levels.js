

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "level1", content: level1, type: "function" },
    { name: "level2", content: level2, type: "function" },
    { name: "level3", content: level3, type: "function" },
    { name: "level4", content: level4, type: "function" },
    { name: "level5", content: level5, type: "function" },
    { name: "giveComputerAnswer", content: giveComputerAnswer, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };