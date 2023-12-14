export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [~3],
		"/dashboard": [~4],
		"/events": [~5,[2]],
		"/events/create": [6,[2]],
		"/events/crud": [7,[2]],
		"/events/[slug]": [~8,[2]],
		"/events/[slug]/edit": [9,[2]],
		"/example": [~10],
		"/login": [~11],
		"/profile": [~12],
		"/register": [~13],
		"/safari": [~14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';