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
			async leave( data ) {
				await transitionFunc(data.current.namespace);
			},
		},
	]
});
