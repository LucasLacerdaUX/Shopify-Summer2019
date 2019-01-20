# Shopify-Summer2019

This is a project developed as part of **Shopify's Web Engineer Intern (Summer 2019)** challenge. Developed using **React.js** and **Axios**.

## Table of Contents

## 1. Demo

[View Demo](https://lucaslacerdaux.github.io/Shopify-Summer2019/)

## 2. Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## 3. Installing

1. First, clone this repo using [Git](https://git-scm.com/) or download the [zip](https://github.com/LucasLacerdaUX/Shopify-Summer2019/archive/master.zip)

```bash
git clone hhttps://github.com/LucasLacerdaUX/Shopify-Summer2019.git
```

2. Navigate to the project root folder and use this **npm** command to install the dependencies

```bash
npm install
```

3. Start the Parcel bundler to run the project on localhost:1234.

```bash
npm start
```

## 4. The Web Engineer Challenge

### 4.1. Goal

The main goal of this challenge was to create a simple web app to search for waste items using the data from the Toronto Waste Wizard, reproducing the design as provided in the screenshot.

![Web App Design provided by Shopify](http://cdn.shopify.com/static/web-eng-challenge-summer-2019/design.png)

Users should be able to search for waste items and add/remove them to a list of favourites.

You can view the full project specification [here](challenge).

### 4.2. Design Decisions

Before coding this project, a few design decisions had to be made to ensure the app provided a good user experience for everyone. Using _Adobe XD_, these two steps were made to increase.

#### 4.2.1 Design Tokens

The first step was to build a few design tokens to be used on the project, such as colors, typography, spacing, shadows, sizing and animation times.

![Design Tokens](http://lacerda.design/Shopify2019/DesignTokens.png)

#### 4.2.2 Components and States

The next step was to make sure every component had a well defined style for each state. That is not only a matter of beauty, but specially important for both the general user experience and the accessibility of the application. Having easy visually distinguable components allows the user to know what's happening on the application and what he's controlling.

![Component States](http://lacerda.design/Shopify2019/Components.png)

### 4.3 Framework Choice

As a UI Designer and UX Developer myself, I usually start my projects by building a Design System of small components and it's respective states. When I'm designing interfaces, I like to plan and organize the small pieces as if I were coding them. React.js allows me to easily translate these UI components into code, and then, individually make them responsive, reusable and accessible.

![AdobeXDtoReact](http://lacerda.design/Shopify2019/XD2React.png)

The components on this project were not only made as dumb as possible to ensure maximum customization capabilities but were also individually documented to make it easier to use on other projects.

### 4.4 Implementation

- Using **Axios**, the data is requested from the [Toronto Open Data Catalogue (JSON)](https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000) and then loaded into the application state.

- A unique `id` is defined for each individual waste item, based on its order on the list.

- Search looks for the occurence of a text input on both `title` and `keywords` attributes of the waste items by using `array.includes()`. An array contains the `id`s of matching items for the current result.

- Favourites can be added/removed by clicking on the green star button. An array contains the `id`s of favourited items.

- When displaying the results, the `body` attribute retrieved from the API was actually encoded HTML, which needed to be parsed before being displayed. To display the raw HTML, the `dangerouslySetInnerHTML={{ __html: body }}` prop from React was used. However, the text needed to be parsed from HTML ampersand characters to ASCII before and we've used a `decodeHTML()` function, just like in [decode-html](https://github.com/intesso/decode-html). As the name suggests, using `dangerouslySetInnerHTML` to insert HTML code on the DOM can be dangerous as it's easy to expose the users to a XSS attack.

### 4.5 Accessibility

The first goal I usually set on almost every single project is the same: try to make it usable for **everyone**. Tech should not divide us or magnify the inequality between us. It can be a matter of preference - some people like to navigate websites using a keyboard, others prefer mouse - or need - like people with disabilities.

To ensure a great experience for everyone, many decisions on this project were based on the [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/) guidelines and recommendations by other professionals. Using `captions` elements to describe tables and `labels` to provide an alternative text for inputs, images and buttons are a great example on the efforts to make web apps accessible.

A specific decision was made for this project: since the main interface is based on a Search Results page, it's important to tell users using Screen Readers what has been searched for and how many results were found. For that, we used an `aria-live="polite"` region to make sure the content is readen by the SR and the user is informed that the result list has been updated.

The interface has been tested with both a keyboard, mouse and the Screen Reader (SR) extension [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=pt-BR).

## 5. Technology Stack

- [React.js](https://reactjs.org), using [create-react-app](https://facebook.github.io/create-react-app)
- [Axios](https://github.com/axios/axios)
- [SCSS](https://sass-lang.com/)
- [ESLint](https://eslint.org/) w/ [Shopify style guide](https://www.npmjs.com/package/eslint-plugin-shopify) + [Prettier](https://github.com/prettier/prettier)

## 6. References

1. [Search | Accesibility Guidelies](http://web-accessibility.carnegiemuseums.org/code/search/)
2. [Accessibility Matters - Search Form](https://www.a11ymatters.com/pattern/accessible-search/)
3. [Improving accessibility on GOV.UK search - Technology in Government](https://gdstechnology.blog.gov.uk/2014/08/14/improving-accessibility-on-gov-uk-search/)
4. [Aria Live Regions | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
5. [Using aria-live | bitsofcode](https://bitsofco.de/using-aria-live/)
6. [Search Landmark | ARIA Landmarks Example - W3C](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/search.html)
7. [H44: Using label elements to associate text labels with form controls](https://www.w3.org/TR/WCAG20-TECHS/H44.html)
8. [Example 4 - Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
9. [Introduction to the Reduced Motion Media Query - CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
