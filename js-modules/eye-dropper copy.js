export default function eyeDropper() {
  const notSupported = document.getElementById("not-supported")
  const eyeDropper = document.getElementById("eye-dropper")
  const eyeDropperButton = document.getElementById("btn-eye-dropper")

  if ("EyeDropper" in window) {
    // document.querySelector(".eyeDropperButton").style.display = "block"
    eyeDropper.style.display = "flex"
    eyeDropperButton.style.display = "block"
    notSupported.style.display = "none"

    async function sampleColorFromScreen(abortController) {
      const eyeDropper = new EyeDropper()
      try {
        const result = await eyeDropper.open({ signal: abortController.signal })
        document.getElementById("colour-hex").textContent = result.sRGBHex
        return result.sRGBHex
        // console.log(result.sRGBHex)
      } catch (e) {
        return null
      }
    }

    const abortController = new AbortController()
    // const eyeDropperButton = document.getElementById("btn-eye-dropper")
    eyeDropperButton.addEventListener("click", async () => {
      const newColour = await sampleColorFromScreen(abortController)
      updateColorSwatch(newColour)
      // colorInput.value = newColour;
    })

    // const colorInput = document.querySelector(".colorInput");
    // colorInput.addEventListener("input", (event) => {
    //     updateColorSwatch(event.target.value);
    // });

    // const colourSample = document.querySelector(".colourSample")
    const colourSample = document.getElementById("colour-sample")
    function updateColorSwatch(color) {
      colourSample.style.backgroundColor = color
    }
  } else {
    //   document.querySelector(".notSupported").style.display = "block"
    //   document.querySelector(".notSupported").textContent =
    //     "Your browser doesn't support the Eye Dropper API."
    eyeDropper.style.display = "none"
    notSupported.style.display = "block"
    notSupported.textContent =
      "Your browser doesn't support the Eye Dropper API."
  }
}
