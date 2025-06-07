
export const initialState = {
    name: '',
    establishment_year: '',
    address: {
        building: '',
        street: '',
        city: {
            name: '',
            locality: {
                pinCode: '',
                landmark: ''
            }
        },
        state: '',
        coordinates: {
            latitude: '',
            longitude: ''
        }
    },
    courses_offered: [],
    error: null
};

export function CollegeReducer(state, action) {
    switch (action.type) {
        case 'name':
        case 'establishment_year':
            return { ...state, [action.type]: action.payload };

        case 'building':
        case 'street':
        case 'state':
            return {
                ...state,
                address: {
                    ...state.address,
                    [action.type]: action.payload
                }
            };

        case 'city_name':
            return {
                ...state,
                address: {
                    ...state.address,
                    city: {
                        ...state.address.city,
                        name: action.payload
                    }
                }
            };

        case 'pinCode':
        case 'landmark':
            return {
                ...state,
                address: {
                    ...state.address,
                    city: {
                        ...state.address.city,
                        locality: {
                            ...state.address.city.locality,
                            [action.type]: action.payload
                        }
                    }
                }
            };

        case 'latitude':
        case 'longitude':
            return {
                ...state,
                address: {
                    ...state.address,
                    coordinates: {
                        ...state.address.coordinates,
                        [action.type]: action.payload
                    }
                }
            };

        case 'courses_offered':
            return {
                ...state,
                courses_offered: action.payload.split(',').map(course => course.trim())
            };

        case 'reset':
            return initialState;

        default:
            return {
                ...state,
                error: 'invalid action type'
            };
    }
}
