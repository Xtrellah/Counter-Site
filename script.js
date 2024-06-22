// RARE CASE DROP POOL TOGGLE
function toggleRareCase() {
    document.querySelector('.rare-case-drop').classList.toggle('visible')
}

// DISCONTINUED CASE DROP POOL TOGGLE
function toggleDiscontinuedCase() {
    document.querySelector('.discontinued-cases').classList.toggle('visible')
}

// NEWS/BLOG
fetch('blog.json').then(function (res) {
    return res.json()
}).then(function(data) {
    
    const target = document.querySelector('.target')
    
    data.blog.forEach(function (blog){
            console.log(blog.name)
            target.innerHTML += `
            <div>
                <img src="${blog.image}" />
                <h2>${blog.title}</h2>
                <p>${blog.desc}</p>
                <a href="${blog.link}">Check it out on GitHub!</a>
            </div>
        `
    })
})