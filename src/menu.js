export const menuTabContent = () => {
    const menu = document.createElement('div');
    menu.id = 'pagecontent';

    const title = document.createElement('h1');
    title.textContent = 'Menu';

    menu.appendChild(title);

    return menu;
}