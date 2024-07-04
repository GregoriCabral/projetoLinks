function toggleMode() {
  const html = document.documentElement
  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
    } else {
      html.classList.add('light')
  }*/
 html.classList.toggle("light")

  // pegar a tag img e substituir a imgaem no modo light
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Grégori com um rosto mais serio e o fundo com azuleijos do banheiro na cor marrom clarinho")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

}