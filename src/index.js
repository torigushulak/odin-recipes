import { homeTabContent } from "./home.js";

import { menuTabContent } from "./menu.js";

import { contactTabContent } from "./contact.js";

export const renderPageContent = (currentTabValue) => {
    let page = document.getElementById('page')

    if (currentTabValue == 'Home') {
        return page.appendChild(homeTabContent());
    }
    if (currentTabValue == 'Menu') {
       return page.appendChild(menuTabContent());
    }
    if (currentTabValue == 'Contact') {
        return page.appendChild(contactTabContent());
    }
}


const render = (() => {
    // main div
    const content = document.getElementById('content');
    let currentTab = 'Home';

    // holds tabs 
    const tabContainer = document.createElement('div');
    tabContainer.id = 'tabcontain';

    // home tab
    const homeTab = document.createElement('button');
    homeTab.textContent = 'Home';
    homeTab.classList = "tab";
    homeTab.addEventListener('click', () => {

        page.textContent = '';
        currentTab = 'Home';
        // Render page content
        renderPageContent('Home');

    });

    // menu tab
    const menuTab = document.createElement('button');
    menuTab.textContent = 'Menu';
    menuTab.classList = "tab";
    menuTab.addEventListener('mouseover', () => {
        // const tabImg = document.createElement('img');
        // img.src = '/images/carrot.png';
        // img.id = "tabcarrot";
        // menuTab.appendChild(tabImg);  
    })
    menuTab.addEventListener('click', () => {

        page.textContent = '';
        currentTab = 'Menu'

        // Render page content
        renderPageContent('Menu');
    });

    // contact tab
    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';
    contactTab.classList = "tab";
    contactTab.addEventListener('click', () => {

        page.textContent = '';
        currentTab = 'Contact';
        // Render page content
        renderPageContent('Contact');
    });





    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);

    content.appendChild(tabContainer);



    // div to display content of each tab
    let page = document.createElement('div');
    page.id = 'page';
    content.appendChild(page);

    renderPageContent(currentTab);
})();






