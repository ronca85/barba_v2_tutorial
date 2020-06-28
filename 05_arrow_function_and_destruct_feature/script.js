import barba from '@barba/core';
import 'regenerator-runtime/runtime';




function transitionFunc(namespace) {
	console.log("namespace", namespace);
}

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

			// async leave( data ) {
			// 	await transitionFunc(data.current.namespace);
			// },

			// we can use arrow functions
			// leave : data => {
			// 	transitionFunc(data.current.namespace);
			// },

			// and we can use destructing feature to get only the needed properties from the data object
			leave : ({ current }) => {
				transitionFunc(current.namespace);
			},
		},
	]
});
