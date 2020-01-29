window.onload = async () => {
    const json = await fetch("https://lalavava.github.io/test.json")
    console.log((await json.json()).abc)
}