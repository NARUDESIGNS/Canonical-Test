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

// Months
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// Render UI
function renderUI(details){
    details.forEach(data => {
        const month = data.date.toLocaleDateString().split('/')[1]; // reurns date array ['25', '08', '2020']
        const year = data.date.toLocaleDateString().split('/')[2];
        const fullDate = data.date.toDateString();
        container.innerHTML += `
            <div class="col-4">
                <div class="p-card u-no-padding">
                    <div class="p-card__inner"> CLOUD AND SERVER </div>
                        <img class="p-card__image" src=${data.src}>
                        <div class="p-card__inner">
                            <h3>${data.title} - ${months[month]} ${year}</h3>
                        </div>
                        <div class="p-card__inner">
                            By <a href="${data.author.link}">${data.author.name}</a> on ${fullDate}
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