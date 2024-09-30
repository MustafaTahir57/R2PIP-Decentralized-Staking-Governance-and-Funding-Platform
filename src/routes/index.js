import About from '../views/about/About';
import AuthView from '../views/auth/AuthView';
import Blogs from '../views/blogs/Blogs';
import Contact from '../views/contact/Contact';
import Dashboard from '../views/dashboard/Dashboard';
import Features from '../views/features/Features';
import HowItWorks from '../views/howitworks/HowItWorks';
import MainView from '../views/MainView';
import Presale from '../views/presale/Presale';
import Purchase from '../views/purchase/Purchase';
import Stack from '../views/stake/Stack';
import Swap from '../views/swap/Swap';
import Vote from '../views/vote/Vote';


let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: MainView,
		layout: 'main',
	},
	{
		path: '/about',
		component: About,
		layout: 'main',
	},
	{
		path: '/how-it-works',
		component: HowItWorks,
		layout: 'main',
	},
	{
		path: '/features',
		component: Features,
		layout: 'main',
	},
	{
		path: '/presale',
		component: Presale,
		layout: 'main',
	},
	{
		path: '/blogs',
		component: Blogs,
		layout: 'main',
	},
	{
		path: '/contact',
		component: Contact,
		layout: 'main',
	},
	{
		path: '/dashboard',
		component: Dashboard,
		layout: 'main',
	},

	{
		path: '/purchase',
		component: Purchase,
		layout: 'main',
	},
	{
		path: '/swap',
		component: Swap,
		layout: 'main',
	},
	{
		path: '/stake',
		component: Stack,
		layout: 'main',
	},
	{
		path: '/vote',
		component: Vote,
		layout: 'main',
	},
];
export default routes;