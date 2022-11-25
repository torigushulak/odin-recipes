export const homeTabContent = () => {
    // veggie image
    const img = document.createElement('img');
    img.src = '/images/veggies.jpg';

    // displays divs
    // all divs will be appended to this element
    const home = document.createElement('div');
    home.id = 'pagecontent';

    const title = document.createElement('h1');
    title.textContent = "Vic's Veggie Bar";
    //restaurant description button
    // click takes you to menu
    const description = document.createElement('button');
    description.textContent = "Farm to Table";
    description.id = "description";

    description.addEventListener('click', () => {
        // import { renderPageContent } from "./index.js"; 
        
    })

    // holds hours of operation
    const hours = document.createElement('div');
    hours.id = "hours";
    hours.textContent = "Hours of operation";

    // holds display for todays hours
    const todayContent = document.createElement('div');
    todayContent.id = "hours";
    todayContent.textContent = "Today's Hours:"

    // finds current day of the week
    const findDay = () => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date();
        let day = weekday[d.getDay()];
        return day;
    }
    // shows hours for today
    const today = (findDay) => {
        if (findDay == "Sunday") {
            return todayContent.appendChild(sun);
        }
        if (findDay == "Monday") {
            return todayContent.appendChild(monday);
        }
        if (findDay == "Tuesday") {
            return todayContent.appendChild(tues);
        }
        if (findDay == "Wednesday") {
            return todayContent.appendChild(wednes);
        }
        if (findDay == "Thursday") {
            return todayContent.appendChild(thurs);
        }
        if (findDay == "Friday") {
            return todayContent.appendChild(fri);
        }
        if (findDay == "Saturday") {
            return todayContent.appendChild(sat);
        }

    }


    // hardcoded hours of operation
    const monday = document.createElement('div');
    monday.id = "hour";
    monday.textContent = "Monday: Closed"
    hours.appendChild(monday);

    const tues = document.createElement('div');
    tues.id = "hour";
    tues.textContent = "Tuesday: 11am-9pm"
    hours.appendChild(tues);

    const wednes = document.createElement('div');
    wednes.id = "hour";
    wednes.textContent = "Wednesday: 11am-9pm"
    hours.appendChild(wednes);

    const thurs = document.createElement('div');
   thurs.id = "hour";
    thurs.textContent = "Thursday: 11am-9pm"
    hours.appendChild(thurs);

    const fri = document.createElement('div');
    fri.id = "hour";
    fri.textContent = "Friday: 11am-10pm"
    hours.appendChild(fri);

    const sat = document.createElement('div');
    sat.id = "hour";
    sat.textContent = "Saturday: 11am-6pm"
    hours.appendChild(sat);

    const sun = document.createElement('div');
    sun.id = "hour";
    sun.textContent = "Sunday: 11am-6pm"
    hours.appendChild(sun);

    // displays todays hours
    let day = today(findDay());
    todayContent.appendChild(day);

    // displays location of restaurant
    const location = document.createElement('div');
    location.id = "location";
    location.textContent = "1123 17th Ave SW";


    home.appendChild(img);
    home.appendChild(title);
    home.appendChild(description);
    home.appendChild(todayContent);
    home.appendChild(hours);
    home.appendChild(location);
    return home;
}

