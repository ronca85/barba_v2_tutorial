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
				return new Promise( resolve => {
					transitionFuncAsync(data.current.namespace, {
						subFunction: () => {
							window.alert("this comes from the subFunction");
							resolve();
						}
					});
				});
			},
		},
	]
});
