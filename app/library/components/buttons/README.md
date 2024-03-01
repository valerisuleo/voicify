### README for ButtonComponent

#### Overview
ButtonComponent is a reusable React component designed for simplicity and flexibility. It allows you to create buttons with custom labels, styles, and click event handlers. The component integrates with a predefined set of contextual classes for styling, making it easy to adapt the button's appearance based on its context within the application.

#### Features
- **Customizable Labels**: Set any text you want on your button.
- **Dynamic Styling**: Utilize the `contextual` object to apply predefined styles.
- **Click Event Handling**: Easily pass a function to handle click events.
- **Type Attribute**: Specify the button type (e.g., `button`, `submit`, `reset`).

#### Installation
This component is part of a larger project and is expected to be used within a React application. Ensure you have React set up in your project before using this component.

1. Copy the `ButtonComponent.jsx` file into your project, preferably in a components directory.
2. Ensure the `interfaces` and `contextual` dependencies are correctly imported from their respective paths.

#### Usage
To use the ButtonComponent in your React application, follow these steps:

1. Import the component where you want to use it:

```jsx
import ButtonComponent from './path/to/ButtonComponent';
```

2. Prepare the `contextual` styling options in your project if not already available. This should be an object with keys representing context names and values as CSS classes.

3. Implement the `IBtn` interface to ensure the props you pass to the ButtonComponent are correctly typed.

4. Use the component within your JSX:

```jsx
<ButtonComponent
    classes="primary" // This should match a key in your `contextual` object.
    label="Click Me"
    onEmitEvent={() => console.log('Button clicked')}
    type="button"
/>
```

#### Props
- **classes** (`string`): Key from the `contextual` object for styling.
- **label** (`string`): Text to display on the button.
- **onEmitEvent** (`() => void`): Function to execute on button click.
- **type** (`"button" | "submit" | "reset"`): The HTML type attribute of the button.

#### Styling
To style the ButtonComponent, use the `contextual` object in your project. Here's an example of how you might set it up:

```javascript
// contextual.js
export const contextual = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    // Add more styles as needed
};
```

Make sure the `contextual` import path in the ButtonComponent matches where you define this object.

#### Contributing
Contributions to the ButtonComponent are welcome. Please ensure you follow the project's code style and contribute guidelines when submitting pull requests or opening issues.

#### License
Specify your project's license here. If not otherwise stated, it's recommended to use an open-source license such as MIT for software projects.