const regionReducer = (state = '', action) => {
    switch (action.type) {
        case 'REGION_CHANGE':
            return action.data;
        default:
            return state;
    }
}

export const handleRegionChange = (region) => {
    return {
        type: 'REGION_CHANGE',
        data: region
    }
}   

export default regionReducer;