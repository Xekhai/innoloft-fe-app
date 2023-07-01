# Innoloft Dashboard

This is a dashboard application for displaying and editing product information. It provides three main pages: the main page, product view, and product edit.

## Technical Requirements

The application is built using the following technologies:

- JavaScript
- React.js
- Redux
- Tailwind CSS

The dashboard is designed to be responsive and compatible with various devices, including mobile devices, with the help of Tailwind CSS.

Thank you for considering my application. I hope you find this solution satisfactory. If you have any questions or need further assistance, please let me know.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)
  - [Main](#main)
  - [Product View](#product-view)
  - [Product Edit](#product-edit)
- [White-Labeling](#white-labeling)
- [API](#api)
- [Technical Requirements](#technical-requirements)

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Xekhai/innoloft-fe-app.git`
2. Navigate to the project directory: `cd innoloft-fe-app`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root directory and add the following environment variable: `REACT_APP_APP_ID=1`
5. Start the development server: `npm start`
6. Open your browser and visit `http://localhost:3000` to access the application.

## Usage

Upon accessing the application, you will see the main dashboard with the following structure:

- Header with the Innoloft logo
- Navigation bar
- Main content area

From the navigation bar, you can navigate to different pages within the dashboard.

## Pages

### Main

The main page serves as the default landing page of the dashboard. It may not have any specific content but provides a starting point for the application.

### Product View

The product view page displays detailed information about a single product. It includes the following elements:

- Main Section:
  - Image
  - Title
  - Type
  - Description
- Details Section:
  - Technologies/Categories
  - Business Models
  - TRL (Technology Readiness Level)
  - Investment Effort / Cost
- Video Section
- User Info:
  - Image
  - Name
  - Company Name
- Map: Displays the company address of the product

### Product Edit

The product edit page allows users to modify the description, attributes, and add new ones for a product. The categories and business models can be edited using simple text inputs, while the TRL can be selected from a dropdown. When saving the changes, a PUT request is made to the API to update the product.

## White-Labeling

The dashboard supports white-labeling by applying different configurations. These configurations can be set through environment variables. If no `.env` file is provided, the fallback value for `REACT_APP_APP_ID` is 1.

A configuration object contains the following properties:

- `id`: Configuration ID
- `logo`: URL of the logo image
- `mainColor`: Main color code in hexadecimal format
- `hasUserSection`: Indicates whether the user info section should be displayed

Depending on the `REACT_APP_APP_ID` environment variable, the corresponding configuration is fetched from the API using the endpoint `/configuration/:appId/`. The available `appIds` are 1 and 2.

When `hasUserSection` is set to `false`, the user info section on the right side should be hidden. The main color should be applied to the header and other relevant elements according to the configuration.

## API

The application interacts with the following API endpoints:

- Product:
  - `GET /product/6781/`: Fetches information about a specific product with ID 6781.
  - `PUT /product/6781/`: Updates the information of the product with ID 6781.
- TRL List:
  - `GET /trl/`: Retrieves a list of Technology Readiness Levels.
- App

 Configuration:
  - `GET /configuration/:appId/`: Fetches the configuration for the specified `appId`.

Please note that the API itself does not persist any changes made through the application.