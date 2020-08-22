'use strict';

const tabs = () => {
    const showcaseBarItems = document.querySelectorAll('.showcase-bar__item'),
        showcaseContent = document.querySelectorAll('.showcase-content');

    const clearClass = (item) => {
        item.classList.remove('active-bar__item');
        item.classList.remove('active-showcase__item');
    }

    showcaseBarItems.forEach( (item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            showcaseBarItems.forEach(clearClass);
            showcaseContent.forEach(clearClass);

            item.classList.add('active-bar__item');
            showcaseContent[i].classList.add('active-showcase__item');
        });
    });
}
tabs();

const bagsHover = () => {
    const trendyItems = document.querySelectorAll('.trendy__item'),
        itemInfo = document.querySelectorAll('.item-info'),
        addBtn = document.querySelectorAll('.add-btn');

    trendyItems.forEach( (item, i) => {
        item.addEventListener('mouseover', () => {
            itemInfo[i].style.display = 'flex';
            addBtn[i].style.display = 'block';
            item.style.boxShadow = '0px 5px 47.5px 2.5px rgba(221, 223, 224, 0.75)';
        });

        item.addEventListener('mouseout', () => {
            itemInfo[i].style.display = 'none';
            addBtn[i].style.display = 'none';
            item.style.boxShadow = '';
        })
    });
};
bagsHover();

AOS.init();