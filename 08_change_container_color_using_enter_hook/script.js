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
			enter( data ) {
				data.next.container.style.backgroundColor = "deepskyblue";
			},
		},
	]
});
