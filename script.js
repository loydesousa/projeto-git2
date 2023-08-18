function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem e alt
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assests/avatar-light.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assests/avatar.png")
    }

    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("alt", "Foto de Mayk Brito sorrindo e de óculos escuros, com uma jaqueta de couro meio verde militar, com um fundo gradiente de roxo e azul")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
    }

  }

