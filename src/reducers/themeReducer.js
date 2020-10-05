const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return action.data;
        default:
            return state;
    }
}

export const toggleTheme = (theme) => {
    return {
        type: 'TOGGLE_THEME',
        data: theme
    }
}

export default themeReducer;