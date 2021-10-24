const linksSocialMedia = {
  github: "claylson-0",
  linkedin: "in/claylson-moreira-francisco/",
  site:"curriculum-vitae"
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    
    if(social=="site"){
      li.children[0].href =`https://${linksSocialMedia.github}.github.io/${linksSocialMedia[social]}`;
    }else{
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;}
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}
getGitHubProfileInfos();
