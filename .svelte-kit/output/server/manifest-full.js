export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/bunny.png","images/customer.jpg","images/edit.png","images/FoodAndDrinkDesignColour.svg","images/logo.jpg","images/logo.png","images/profileBg.png","images/profileImage.jpg","images/savana.jpg","json/provincesAndCitiesNL.json","models/Chunks/bottom_center.glb","models/Chunks/bottom_left.glb","models/Chunks/bottom_right.glb","models/Chunks/center.glb","models/Chunks/center_left.glb","models/Chunks/center_right.glb","models/Chunks/center_top.glb","models/Chunks/top_left.glb","models/Chunks/top_right.glb","models/chunk_center.gltf","models/safari_fixed.glb","textures/ground/albedo.jpg","textures/ground/disp.png","textures/ground/normal.exr","textures/ground/rougness.exr","zelda.jpeg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".json":"application/json",".glb":"model/gltf-binary",".gltf":"model/gltf+json",".exr":"image/aces",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a064cf16.js","app":"_app/immutable/entry/app.5b628bdd.js","imports":["_app/immutable/entry/start.a064cf16.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/singletons.489fad4f.js","_app/immutable/chunks/index.a8d8cf0e.js","_app/immutable/entry/app.5b628bdd.js","_app/immutable/chunks/index.1beed945.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/events/create",
				pattern: /^\/events\/create\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/events/crud",
				pattern: /^\/events\/crud\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/events/[slug]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/events/[slug]/edit",
				pattern: /^\/events\/([^/]+?)\/edit\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/example",
				pattern: /^\/example\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/safari",
				pattern: /^\/safari\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
