const main = document.body

main.style.opacity = "0"

document.addEventListener("DOMContentLoaded", () => {
  main.style.opacity = "1"
})
function copyText(content) {
  if (!navigator.clipboard) {
    // Clipboard API not available
    return
  }
  try {
    navigator.clipboard.writeText(content)
    console.log("Copied!")
  } catch (err) {
    console.error("Failed to copy!", err)
  }
}

const discord = document.getElementById("discord")
const discordText = document.getElementById("discord-text")
discord.addEventListener("click", (e) => {
  const text = "algoskril"

  discordText.innerText = "Copied!!!"
  setTimeout(() => {
    discordText.innerText = "Discord"
  }, 2000)

  copyText(text)
})

const github = document.getElementById("github")
const facebook = document.getElementById("facebook")
const gmail = document.getElementById("mail")

github.addEventListener("click", (e) => {
  window.open("https://github.com/kg2714", "_blank").focus()
})

facebook.addEventListener("click", (e) => {
  window
    .open(
      "https://www.facebook.com/lelygg89sgdbgr4t56d5fg1s6554651f31g6d54/",
      "_blank",
    )
    .focus()
})

gmail.addEventListener("click", (e) => {
  window.location.href = "mailto:errkg0783@gmail.com"
})
