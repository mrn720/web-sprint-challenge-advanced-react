# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A functional component doesn't manage state and generally relies on props. 
A stateful component can also use props, but is able to manage and change it's own state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is called before a render, while componentWillUpdate is called as soon as shouldComponentUpdate returns true. This is only to mention that an update or mount will be expected, but does not trigger them.

3. Define stateful logic.
Stateful logic is code used to create or change data. 

4. What are the three step of creating a successful test? What is done in each phase?
Arrange: Render the component you are testing
Act: Find the element you are testing
Assert: Pass the test in the element
