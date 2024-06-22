const passwordInput = document.querySelector("#passwordInput")

passwordInput.addEventListener("input", function () {
  const password = this.value

  const strengthIndicator = document.querySelector(
    "#password-strength-indicator"
  )

  const strengthText = document.querySelector("#password-strength-text")

  const strengths = {
    0: "Muito Fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito Forte",
    5: "Muito Forte",
  }

  let score = 0
  //Requisitos
  if (password.length >= 8) score++
  if (password.match(/[a-z]/)) score++
  if (password.match(/[A-Z]/)) score++
  if (password.match(/[0-9]/)) score++
  if (password.match(/[^a-zA-Z0-9]/)) score++

  //calculo da %, pq a largura vai ser em %
  const width = (score / 4) * 100

  switch (score) {
    case 1:
      strengthIndicator.style.backgroundColor = "#e70b0b"
      break
    case 2:
      strengthIndicator.style.backgroundColor = "#ffb74d"
      break
    case 3:
      strengthIndicator.style.backgroundColor = "#fff176"
      break
    case 4:
      strengthIndicator.style.backgroundColor = "#81c784"
      break
    case 5:
      strengthIndicator.style.backgroundColor = "#81c784"
      break
    default:
      strengthIndicator.style.backgroundColor = "transparent"
  }

  strengthIndicator.style.width = `${width}%`

  if (password.length > 0) {
    strengthText.innerHTML = `Força: ${strengths[score]}`
  } else {
    strengthText.innerHTML = ""
  }
});
