import setMultipleAttributes from "./set-multiple-attributes.js"

export default function eyeDropper() {
  const mainContent = document.getElementById("main-content")
  const notSupported = document.getElementById("not-supported")
  const eyeDropper = document.getElementById("eye-dropper")
  const eyeDropperButton = document.getElementById("btn-eye-dropper")

  if ("EyeDropper" in window) {
    mainContent.style = "background-image: url(./img/216-web-safe-colours.png);"
    eyeDropper.style.display = "flex"
    eyeDropperButton.style.display = "block"
    notSupported.style.display = "none"

    async function sampleColorFromScreen(abortController) {
      const eyeDropper = new EyeDropper()
      try {
        const result = await eyeDropper.open({ signal: abortController.signal })
        document.getElementById("colour-hex").textContent = result.sRGBHex
        return result.sRGBHex
      } catch (e) {
        return null
      }
    }

    const abortController = new AbortController()
    eyeDropperButton.addEventListener("click", async () => {
      const newColour = await sampleColorFromScreen(abortController)
      updateColorSwatch(newColour)
    })

    const colourSample = document.getElementById("colour-sample")
    function updateColorSwatch(color) {
      colourSample.style.backgroundColor = color
    }
  } else {
    mainContent.style = "background-image: none;"
    eyeDropper.style.display = "none"
    notSupported.style.display = "flex"
    const messageHeader = document.createElement("h2")
    const messageText = document.createElement("p")
    const messageLink = document.createElement("a")

    messageHeader.textContent =
      "Your browser doesn't support the Eye Dropper API."
    messageText.textContent = "To check supported browsers and platforms, see:"

    setMultipleAttributes(messageLink, {
      href: "https://caniuse.com/mdn-api_eyedropper",
      target: "blank",
      rel: "noopener noreferrer",
      class: "external-link",
    })
    messageLink.textContent = "Caniuse: Eye Dropper API"
    notSupported.append(messageHeader, messageText, messageLink)
  }
}
