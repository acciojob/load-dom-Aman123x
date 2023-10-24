//your JS code here. If required.
 // Function to be executed when the DOM is loaded
      function onDOMLoad() {
        // Get the body element
        var body = document.body;

        // Clear the body's inner HTML to make it empty
        body.innerHTML = '';

        // Create a new text node with the content "DOM load success"
        var textNode = document.createTextNode("DOM load success");

        // Append the text node to the body
        body.appendChild(textNode);
      }

      // Add an event listener for the DOMContentLoaded event
      document.addEventListener("DOMContentLoaded", onDOMLoad);