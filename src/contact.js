export const contactTabContent = () => {
    const info = document.createElement('div');
    info.id = 'pagecontent';
    
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';

    info.appendChild(title);

    return info;
}