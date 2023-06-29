# Infinite Scrolling and Searchable Product List

This project implements an infinite scrolling list of products in a React application using TypeScript. The product data is fetched from an API, and the application also provides a search functionality for users to search products by name.

## Requirement:

To run this project, you need to have Yarn installed on your machine. Yarn is used as the package manager for this project.

## Installation:

1. Clone this repository to your local machine using the following command:

### `git clone https://github.com/yuuichi4727/product-list.git`

2. Navigate to the project directory:

### `cd product-list`

3. Install the dependencies using Yarn:

### `yarn install`

## Usage:

1. Start the development server:

### `yarn start`

This command will start the React application and open it in your default browser. If the browser doesn't open automatically, you can access the application at http://localhost:3000.

2. The application will display an infinite scrolling list of products. Each time you scroll to the end of the list, it will fetch the next 20 products and append them to the existing list.

3. To search for a product by name, type the name in the search input field. The application will fetch the matching products and update the product list accordingly.

## Technologies Used:

-   React
-   TypeScript
