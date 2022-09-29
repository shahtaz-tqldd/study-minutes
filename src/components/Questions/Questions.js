import React from 'react';
import './questions.css';

const Questions = () => {
  return (
    <div className='question-container'>
        <h1>Questions Answering Section</h1>
        {/* question 1 */}
        <div className='question'>
            <h2>1. How does react work?</h2>
            <p>React is Javascript Library. It helps to create a Single Page Web Application, denoting all the pages as a component. React loads all those components in a single HTML file. It later helps to write code in JSX (Javascript XML) format exactly as writing code in HTML, which then is operated as a javascript file in react.</p>
        </div>

        {/* question 2 */}
        <div className='question'>
            <h2>2. Difference Between props and state</h2>
            <p>In props, data is passed from one component to another. In states, The Data is passed within the component only. <br/><br/>Props are Immutable and thus cannot be modified. State is Mutable that’s why data can be modified and updated <br/><br/>Props can be used with state and functional components. State can be used only with the state components/class component (Before 16.0)</p>
        </div>

        {/* question 3 */}
        <div className='question'>
            <h2>3. What else does useEffect() do besides loading data?</h2>
            <p>useEffect() is one of the react Hook. Usually, useEffect() is used to perform data fetching or call some other imperative API. <br/><br/>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates.</p>
        </div>
    </div>
  )
}

export default Questions