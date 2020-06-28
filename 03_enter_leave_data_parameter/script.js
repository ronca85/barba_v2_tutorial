import barba from '@barba/core';

barba.init({
	transitions: [
		// {
		// 	name: "Amazing transition"
		// },
		// {
		// 	name: "Gorgeous transition"
		// },
		{
			name: "Beautiful transition",
			// sync: true,
			// once() {
			// 	console.log("once");
			// },
			leave( data ) {
// all hooks we used earlier can take a parameter which is an object compose of five properties
/*
the hooks hold five properties:
	1. trigger
	2. current
	3. next
	4.
	5.
*/
				// console.log("leave trigger", data.trigger);

	// the 'current' property is an object that represents the current page.
	/*
	it holds five properties:
		1. container
		2. namespace - needs to be specified in the template, data-baba-namespace="YOUR_NAMESPACE"
		3. url - an object containing information about the current page
		4. html - which is a string representation of the html code of the current page
		5. route - this object is meant to be used by a plugin called barba-router
	*/
				// console.log("leave current", data.current.container);
				// console.log("leave current", data.current.namespace);
				// console.log("leave current", data.current.url);
				// console.log("leave current", data.current.html);
				// console.log("leave current", data.current.route);
			},
			enter( data ) {
				// the 'next' property is basically the same as 'current' except it holds data for the next page
				// in general, when using next you should use enter() method instead of leave()
				console.log("enter", data);
			},
		},
	]
});
