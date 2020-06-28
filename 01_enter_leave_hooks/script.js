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
			before() {
				// * [ 1 ]
				console.log("before");
			},
			after() {
				console.log("after");
			},
			beforeEnter() {
				// * [ 1 ]
				console.log("beforeEnter");
			},
			enter() {
				// [ 1 ]
				// before, beforeEnter and after hooks only work if we use them along enter or leave hooks
				// as long as we have enter OR leave hooks defined all the other hooks will trigger
				console.log("enter");
			},
		},
	]
});
