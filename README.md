![Pages](/assets/images/pages-logo.png)

# Pages website for displaying dynamic content

## Why this project

This website is a demonstration of how a static site can fetch data from an API and display it in a table format. The data is a list of failed banks, sourced by the FDIC (Federal Deposit Insurance Corporation). 

## Features

- **Dynamic Table**: Using vanilla JavaScript, the JSON response data is used to build the table header and rows then append them to an empty HTML table element within the static page. Pages serves everything client site so upon any changes to the backend database, during page load those changes will be reflect on the page.

- **Responsive Design**: The HTML table uses a grid layout ensuring that the table is easiliy viewable on device of different sizes.

- **U.S. Web Design System (USWDS) Compliant**: Utilizes USWDS design principles, styling and accessiblity standards. The site is also mobile device friendly.

## Development

This website is built with HTML, CSS, a couple of image assests and Javascript. It uses vanilla JavaScript to fetch data from the API and manipulate the DOM to create the table.

To modify the website you can edit the `index.html` file. Changes will be reflected once the site is rebuilt by Pages.