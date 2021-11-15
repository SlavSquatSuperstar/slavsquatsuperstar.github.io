// Add action listeners
var buttons = document.getElementsByClassName("collapsible")
for (let i = 0; i < buttons.length; i++) {
  buttons[i].setAttribute("onclick", `toggle(content${i})`)
}

function toggle(content) {
  if (content.style.display === "block") {
    content.style.display = "none"
  } else {
    content.style.display = "block"
  }
}
