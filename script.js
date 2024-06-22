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
                <div>
                    <h2>${blog.title}</h2>
                    <h4>${blog.date}</h4>
                    <p>${blog.desc}</p>
                </div>
            </div>
        `
    })
})



fetch('commands.json').then(function (res) {
    return res.json()
}).then(function(data) {
    
    const target = document.querySelector('.coms-target')
    
    data.table.forEach(function (table){
            console.log(table.name)
            target.innerHTML += `
            <tr>
                <td>${table.command}</td>
                <td>${table.description}</td>
            </tr>
        `
    })
})
