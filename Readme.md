#1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :  
getElementById are the fastest selection methods its selects only one element by one unique id.
getElementsByClassName it’s selects multiple elements with the same class and return live HTML collection.
.querySelector it’s selected first element that matches a CSS selector.
querySelectorAll it’s Selects all matching elements using CSS selectors returns NodeList.

#2.How do you create and insert a new element into the DOM?
Ans :
By using document.creatElement() we can create new element.Using append() and appendChild() method we can Insert it into the DOM.

#3.What is Event Bubbling and how does it work?
Ans :
Event bubbling means when an event happens on an element, it first triggers on that element, then moves upward to its parent, then grandparent, and then next node.

#4.What is Event Delegation in JavaScript? Why is it useful?
Ans :
Event delegation is when attaching a single event listener to a parent element instead of many listeners to each child ,it saves memory and works for dynamically added elements too.

#5.What is the difference between preventDefault() and stopPropagation() methods?
Ans :
preventDefault() it's stops the default browser action.
stopPropagation() it's stops the event from bubbling up or going down the DOM tree.
