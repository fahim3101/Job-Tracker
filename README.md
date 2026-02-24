1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
* getElementById: Find an element by its id.
It gives back only one element.
* getElementsByClassName: Find elements by a class name.
It gives back many elements and It returns an HTMLCollection.
* querySelector: Use a CSS selector to find an element.
It gives back the first matching element.
* querySelectorAll: Use a CSS selector to find elements. It gives back all matching elements. It returns a NodeList.



2. How do you create and insert a new element into the DOM?

Ans:
First make an Element then add content and then add DOM. 


3. What is Event Bubbling? And how does it work?

Ans:
Event bubbling is a process where an event first happens on the child element,
then step by step goes up to the parent element.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event delegation means putting the event listener on the parent element, so it can handle events from its child elements inside.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault() stops the browser’s default action.
stopPropagation() stops event bubbling.

