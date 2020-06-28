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
			once() {
				console.log("once");
			},
			afterOnce() {
				// beforeOnce and afterOnce will not work if we don't use the once method
				console.log("afterOnce");
			},
		},
	]
});
