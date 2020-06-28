import barba from '@barba/core';
import 'regenerator-runtime/runtime';




function transitionFunc(namespace) {
	console.log("namespace", namespace);
}

function transitionFuncAsync(namespace, obj) {
	console.log("namespace", namespace);
	obj.subFunction();
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

			// another way of calling hooks is through this.async
			leave( data ) {
				const done = this.async();
				// the transition function takes two parameters
				/*
					1. namespace
					2. an object that contains a callback function
				*/
				transitionFuncAsync(data.current.namespace, {
					subFunction: () => {
						window.alert("this comes from the subFunction");
						// calling the done() constant here gives the green light for the transition to take place
						// it can be very useful when we try to create some sort of a delay before the transition
						done();
						// most of the time you only need the done() constant
					}
				});
			},
		},
	]
});
