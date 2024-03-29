

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
    });
});

// window.addEventListener('scroll', () => {
//     const navBar = document.getElementsByClassName('navbar')[0];
//     window.scrollY > 0 ? (navBar.style.backgroundColor = "rgba(255, 255, 255, 0.54)") :
//         navBar.style.backgroundColor = "rgba(255, 255, 255, 1)";
// });



const news = {
    box1: {
        title: "Titulo Super Bacana",
        content: "Descrição muito dahora",
        img: "https://picsum.photos/200",
        url: "https://www.colegiodonabranca.com/institucional/espaços-físicos/sala-alternativa"
    },

    box2: {
        title: "Um Titulo Mais Bacana Ainda!",
        content: "Uma descrição ainda mais dahora",
        img: "https://picsum.photos/200",
        url: "https://www.colegiodonabranca.com/institucional/espaços-físicos/sala-alternativa"
    },

    box3: {
        images: [
            {
                img: "data:image/png;base64,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",
                url: "https://www.colegiodonabranca.com/institucional/espaços-físicos/sala-alternativa"
            }, {
                img: "data:image/png;base64,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",
                url: "https://www.colegiodonabranca.com/institucional/espaços-físicos/sala-alternativa"
            }, {
                img: "data:image/png;base64,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",
                url: "https://www.colegiodonabranca.com/institucional/espaços-físicos/sala-alternativa"
            },
        ],
    },

}


const init = () => {

    for (var i = 1; i <= 2; i++) {
        document.getElementById('box' + i).innerHTML = `  <p style="color: white; font-size: 25px">${news.box1.title}</p>
                <p>${news.box1.content}</p>
                <img src="${news.box1.img}" alt="" srcset="">
                <button class="btn btn-secondary" onclick="location.href='${news.box1.url}'">Veja Mais</button>`;
    }
    let carousel = "";
    for (var i in news.box3.images) {
        if (i == 0) {
            carousel += `<div class="carousel-item active">
        <img src="${news.box3.images[i].img}" class="d-block w-100" alt="...">
        </div>`;
            continue
        }
        carousel += `<div class="carousel-item">
        <img src="${news.box3.images[i].img}" class="d-block w-100" alt="...">
        </div>`;
    }
    document.getElementById("box3").innerHTML =
        ` <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
        ` + carousel
        + `  </div >
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>`
};

document.addEventListener('DOMContentLoaded', init);