import { v4 as uuidv4 } from 'uuid';
import { IFooterLink, IFooterNavLinks } from './interfaces';

export const menuItems: any = {
    firstList: [
        { route: 'home', label: 'Home' },
        { route: 'blog', label: 'Blog' },
        { route: '', label: 'Settings' },
        { route: '', label: 'Cartoons' },
    ],

    secondList: [
        { route: '', label: 'Pricing' },
        { route: '', label: 'Login' },
        { route: '', label: 'Sign Up' },
        { route: '', label: 'Forgot Password' },
        { route: '', label: 'History' },
        { route: '', label: 'Terms of Use' },
        { route: '', label: 'Privacy Policy' },
        { route: '', label: 'Refund Policy' },
    ],

    thirdList: [
        { route: '', label: 'Drizzy AI Model' },
        { route: '', label: 'Juice AI Model' },
        { route: '', label: 'Kanye AI Model' },
        { route: '', label: 'Drizzy AI Model' },
        { route: '', label: 'Juice AI Model' },
        { route: '', label: 'Kanye AI Model' },
        { route: '', label: 'Drizzy AI Model' },
        { route: '', label: 'Juice AI Model' },
        { route: '', label: 'Kanye AI Model' },
    ],
};

const result = {} as IFooterNavLinks;

for (const key in menuItems) {
    if (Object.prototype.hasOwnProperty.call(menuItems, key)) {
        result[key] = menuItems[key].map((item: IFooterLink) => ({
            ...item,
            id: uuidv4(),
        }));
    }
}

export const navLinks = result;
