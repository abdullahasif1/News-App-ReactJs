LionNews

LionNews is a Web application for News. It allows the users to navigate to different categories(General, sports technology etc) of news which are accessible from the navigation bar. News cards hold the news details and hence provide the link to the full news source. 

LionNews consists of four components: Navigation-bar, News-cards and News-Items and Spinner. NewsApi is used to fetch the news data. React Router, Infinite Scrollbar, useState(state management), useEffect, prop drilling methods of React JS are used. Functions of JavaScript including map, async/await and Fetch are applied.

Workflow: React Router allows the user to navigate to any of the categories available through the navigation bar. On the first render, the change of category, a request to NewsApi is sent. While the data is loaded, Spinner is displayed. News cards get the response of NewsApi and pass the news related data to News-items. News-items arrange the data to the respected fields and return to News-cards. Which is then displayed on the News-card and hence news cards are displayed on the website.
