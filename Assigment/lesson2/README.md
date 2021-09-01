### Lesson 2

## main point of todays lecture 
  * React is Libraray that performs specific ,well defined operations
  * Frame works is more broad than library 
  * Componenets in react is custom and reusable HTML elements to quickly and efficiently build user interfaces
  * unlike browesor DOM React elemets are plain objects and are cheap to create .React DOM takes care of updating the DOM to match the React elements 
  * React DOM  compares the elemets and its childrens to the previous one and only applies the DOM updates necessary to bring the DOM to the desired state

  ### Difference between Functional component and class componenet
 #### Functional component
 * A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.  
 * There is no render method used in functional components.
 * Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
 * React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
  #### Class component
  * A class component requires you to extend from React. Component and create a render function which returns a React element.
  * It must have the render() method returning HTML
  * Also known as Stateful components because they implement logic and state.
  * React lifecycle methods can be used inside class components (for example, componentDidMount).

  ## Reference
  * https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/
