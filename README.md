# My Project Name is Developer Stack

 -  A modern web application that helps developers discover, explore, and build their ideal development stack. Browse through curated technologies across Frontend, Backend, Database, DevOps, and more — all in one place with ratings, difficulty levels, and badges to guide your choices.

 ## Technologies that I used
 - React.js – For building a fast, component-based UI
 - Vite — Fast development environment and project bundling
 - Tailwind CSS – For clean, responsive, and utility-first styling
 - JavaScript (ES6+) – Core language powering the app logic
 - JSON (Local Data) – Structured technology & stack data with fields like id, name, category, rating, difficulty, and badge

## Three Features of my project 
 ### 1. Technology Explorer
   - Browse technology cards containing the technology name, category, description, rating, difficulty level, icon, and badge.

### 2. Dev Stack Builder
  - Explore and display different technology stacks, making it easier to understand and organize technologies for a development project.

### 3. Responsive & Modern UI
  - The website includes a responsive navbar, banner, technology cards, stack cards, and footer that work across different screen sizes.


 =======================================================================================================


 ## I. What is JSX, and why is it used in React?
  - JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make it easier to create and understand the UI components.

 ## II. What is the difference between props and state?
   - **Props** are data passed from a parent component to a child component. They are read-only.

  - **State** is data managed inside a component and can change when the user interacts with the application.

## III. What does the useState hook do, and where did you use it in this project?
   - *useState* is used to store and update data inside a React component. 
   - In this project, I used useState to manage the technology/stack data and update the UI when the data or selected stack changes.

## Iv. What does the useEffect hook do, and why did you need it to load the JSON data?
 - *useEffect* runs side effects after render, like fetching data. I needed it to fetch the JSON once.

 - when the component mounted (with an empty dependency array), then save the result in state so it could be rendered.

## V. Why does every item in a .map() list need a unique key prop?
 - The key helps React identify which items changed, were added, or were removed. Without unique keys, React may re-render items incorrectly and performance suffers.

## Vi. What is conditional rendering? Show one place you used it 
 - Conditional rendering means showing different UI based on a condition. I used it to show an empty-stack message when the list has no items
 - **In my project, I used conditional rendering in the Your Stack component. If no technology is selected, it shows “Your stack is empty.” Otherwise, it displays the selected technology cards.**
 - - if(selectedStacks.length === 0){
        return (
            <div className="border-dashed border border-[#E1E1E1] my-7  p-7 rounded-2xl">
                <p className="text-[#94a3b8FF] text-xs md:text-sm text-center">
                Your stack is empty.
                </p>
            </div>
        )
    }
    - - I also used conditional rendering to show the “Remove All” button only when at least one technology has been added to the stack.

 ## Vii. How do you pass data from a parent to a child, and how does a child send something back to the parent?

  - A parent passes data down through props. A child sends data back by calling a callback function that the parent passed down as a props