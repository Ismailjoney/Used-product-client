import React from 'react';

const Blog = () => {
    return (
        <div style={{width: '80%', margin: '0 auto'}}>

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-dark text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2> What are the different ways to manage a state in a React application?</h2>
                </div>
                <div className="collapse-content   text-primary-content  peer-checked:text-secondary-content">
                    <p>
                        There are four main types of state you need to properly manage in your React apps:
                        Let's cover each of these in detail:
                        Local (UI) state – Local state is data we manage in one or another component.
                        Local state is most often managed in React using the useState hook.
                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabledand the values of a form’s inputs.
                        Global (UI) state – Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                        Sometimes state we think should be local might become global.
                        Server state – Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        URL state – Data that exists on our URLs, including the pathname and query parameters.
                        URL state is often missing as a category of state, but it is an important one.
                        How to Manage Local State in React
                        Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.
                        useState is the first tool you should reach for to manage state in your components.

                    </p>
                </div>
            </div>


            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-dark  text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2>What is a unit test? Why should we write unit tests?</h2>
                </div>
                <div className="collapse-content   text-primary-content  peer-checked:text-secondary-content">
                    <p>

                        What Is Unit Testing?
                        In this article
                        What Do Unit Tests Look Like?
                        Who Should Create The Unit Test Then?
                        What Can I Do With Them?
                        Related Topics
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."
                    </p>
                    <p className='pt-7'>
                        You can test units or functions of your project in isolation.
                        Unit tests act as documentation for your code.
                        They enable you to catch bugs early in the development process.
                        Automated unit tests help a great deal with regression testing.
                        They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-dark text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2>How does prototypical inheritance work?</h2>
                </div>
                <div className="collapse-content   text-primary-content  peer-checked:text-secondary-content">
                     <p>
                     Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
                     </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-dark text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h2>React vs. Angular vs. Vue?</h2>
                </div>
                <div className="collapse-content   text-primary-content  peer-checked:text-secondary-content">
                     <p>
                     Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                     </p>
                </div>
            </div>



        </div>




    );
};

export default Blog;