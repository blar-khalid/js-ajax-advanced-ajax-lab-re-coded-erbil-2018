function getRepositories() {
  const url = 'https://github.com/blar-khalid';
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("load", displayRepositories)
  xhr.open("GET", url)
  xhr.send();
}
function show() {
  const repos = JSON.parse(this.responseText)
  const repoList = "<ul>" + repos.map(repo => {
    const dataUsername = 'data-username="' + repo.owner.login + '"'
    const dataRepoName = 'data-repository="' + repo.name + '"'
    return(`
          <li>
            <h2>${repo.name}</h2>
            <a href="${repo.html_url}">${repo.html_url}</a><br>
            </li>
          </li>`
          )
  }).join('') + "</ul>";
  document.getElementById("repositories").innerHTML = repoList
}