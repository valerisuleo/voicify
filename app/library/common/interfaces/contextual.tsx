export const contextual = {
    primary: 'bg-purple-700 hover:bg-purple-800 text-white',
    secondary: 'bg-purple-50 hover:bg-purple-100 text-purple-700',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-black',
};

export type ContextualClass = keyof typeof contextual;
