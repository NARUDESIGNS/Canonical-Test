// Get elements
const container = document.getElementById('container');
const loading = document.getElementById('loading');

// Fetch API data;
async function getData(){
    let postsData = [];
    try {
        const res = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json');
        const data = await res.json();
        loading.classList.add('hide');
        data.forEach(element => {
            postsData.push({          
                src:  element['featured_media'],
                title:  element.title.rendered,
                article: element.link,
                author:  element['_embedded']['author'][0],
                date:  new Date(element.date),
                type:  element.type
            })
        });
        renderUI(postsData);
    } catch(err) {
        throw new Error(err);
    }
}

// Render UI
function renderUI(details){
    details.forEach(data => {
        const year = data.date.toLocaleDateString().split('/')[2];
        const fullDate = data.date.toDateString();
        container.innerHTML += `
            <div class="col-4">
                <div class="p-card u-no-padding">
                    <div class="p-card__inner"> CLOUD AND SERVER </div>
                        <img class="p-card__image" src=${data.src}>
                        <div class="p-card__inner">
                            <a href="${data.article}"><h3>${data.title}</h3></a>
                        </div>
                        <div class="p-card__inner author">
                            <i>By <a href="${data.author.link}">${data.author.name}</a> on ${fullDate}</i>
                        </div>
                        <hr class="u-no-margin--bottom">
                        <div class="p-card__inner">Article</div>
                    </div>
                </div>
            </div>
        `;
    })
}

// Load DOM
getData();