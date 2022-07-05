const boxItems = [
    { id: 1, boxTitle: "crowdfunding" },
    { id: 2, boxTitle: "marketplaces" },
];

let index = 0;

document.getElementById('btn-new-box').addEventListener('click', function () {
    const container = document.querySelector('.container-box');
    const template  = document.querySelector('#template-box');
    document.createElement('template');
    
    index === boxItems.length - 1 ? index = 0 : index++;
    latestActiveBox = boxItems[index];
    const boxTitle  = latestActiveBox.boxTitle;

    const clonedBox = template.content.cloneNode(true);
    clonedBox.querySelector("a").setAttribute('class', `box-link-${boxTitle}`);
    clonedBox.querySelector("span").setAttribute('class', `circle circle-${boxTitle}`);
    clonedBox.querySelector("use").setAttribute('href', `./assets/icon-${boxTitle}.svg#${boxTitle}`)
    
    const title       = clonedBox.querySelector("h2");
    title.textContent = boxTitle;

    container.appendChild(clonedBox)
})



