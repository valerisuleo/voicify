# Welcome to ListGroupComponent!

Hey there! 👋 We're so glad you're here to check out our `ListGroupComponent`. This React component is designed with flexibility and customization in mind, making it super easy to integrate into your project. Whether you're building an app that requires a dynamic list with clickable items or you just need a simple, stylish list component, we've got you covered!

## Features

- **Dynamic List Rendering**: Easily render lists based on your dynamic data.
- **Customizable Click Events**: Trigger custom actions when list items are clicked.
- **Conditional Styling**: Utilize our `contextual` styling for active states or hover effects.
- **Borderless Option**: Prefer a cleaner look? Go borderless with a simple prop!

## Installation

First things first, let's get this component into your project. Assuming you've got a React project set up, you can simply copy the `ListGroupComponent.js` file into your components directory. Don't forget to ensure that the `contextual` object and the `IListGroup` interface are correctly set up in your project as well!

## Usage

Here's a quick guide on how to use the `ListGroupComponent` in your project:

```jsx
import React from 'react';
import ListGroupComponent from './path/to/ListGroupComponent';
import { contextual } from './path/to/contextual'; // Ensure this is set up

const MyComponent = () => {
    // Your collection of items to display
    const items = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
    ];

    // Handler for click events on list items
    const handleItemClick = (item) => {
        console.log('Item clicked:', item);
    };

    return (
        <div>
            <h2>Check out my cool list!</h2>
            <ListGroupComponent
                collection={items}
                propKey="id"
                propText="text"
                borderless={false} // Set to true for a borderless list
                onEmitEvent={handleItemClick}
            />
        </div>
    );
};

export default MyComponent;
```

### Props

- `collection`: An array of objects representing your list items.
- `propKey`: The property name in your objects to be used as a unique key.
- `propText`: The property name in your objects to be displayed as the list item text.
- `borderless`: A boolean to remove borders from the list items. Default is `false`.
- `onEmitEvent`: A function that is called when a list item is clicked, passing the clicked item as an argument.

## Styling with `contextual`

To make the most out of your list's appearance, you can define styles in the `contextual` object. This lets you dynamically change styles based on the item's state (like `active` or on `hover`). Here's an example setup:

```javascript
export const contextual = {
    primary: 'bg-blue-500 text-white', // Active item style
    secondary: 'bg-gray-100 text-gray-900' // Hover style
};
```

Feel free to tweak these styles to match your app's theme!
