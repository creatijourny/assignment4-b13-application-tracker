1.1 getElementById returns a single element associated with unique IDse, while getElementsByClassName returns a collection of elements (HTMLCollection) because multiple elements can share the same class name. 

1.2 querySelector() returns a single element (the first element) that matches a specified CSS selector. While querySelectorAll() returns a static NodeList containing all matching elements. It means a snapshot of the DOM at the time the call was made.

2.It takes two-step process: create the element and then append it to an existing parent element
	Example: const newElement = document.createElement('ul');

		const parentElement = document.getElementById('parentDiv');
		parentElement.appendChild(newElement);

3. Event Bubbling is a mechanism in the browser's DOM where an event triggered on a specific element, and then runs handlers on that element and propagates upward through all of its parent and ancestor elements in the DOM. It is a powerful technique where we can attach a single event listener to a common ancestor to manage events for all of its descendant elements. This improves performance by reducing the number of event listeners.

4. Event delegation is a JavaScript pattern where a single event listener is attached to a parent element to manage events for all of its child elements, leveraging the concept of event bubbling. This technique improves performance, reduces memory usage. It allows us to handle events at a higher level in the DOM tree other than the level where the event was first received.

5. preventDefault() stops the default browser action. It prevents the browser's default behavior for a specific event. Such as preventing a form from submitting and reloading the page, allowing us to handle the submission with JS.

stopPropagation stops the event from traveling up/down the DOM tree. It does not prevent the default browser action from occurring. stopPropagation prevents further propagation of the current event in the capturing and bubbling phases.
