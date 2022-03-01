const LinksSocialMedia={
    github:'LeandroCordeiro97',
    youtube: "LeandroCordeiro",
    facebook: "leandro.cordeiro.9022",
    instagram:"LeandroC0rdeir0",
    twitter:"D4rk_Boy__"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
 //ARROW FUNCTIONS
 //function nomedafunçao(argumentos){
     //code


//argumento =>{}

    