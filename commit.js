// JS code to display the current GitHub Pages build on the site

fetch('https://api.github.com/repos/FEPSFY6967329/FY6967329/commits?per_page=1')
.then(res => res.json())
.then(res => {
        document.getElementById('message').innerHTML = res[0].commit.message
    })
