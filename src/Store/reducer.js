function reducer(state, action) {
    switch (action.type) {
        case 'SET_SIZE':
            const size = action.payload;
            const cost = size === 'small' ? 50 : 100;
            const calories = size === 'small' ? 20 : 40;
            return { ...state, size, cost: state.cost + cost, calories: state.calories + calories };
        case 'SET_TOPPING':
            const topping = action.payload;
            const extraCost = topping === 'cheese' ? 10 : (topping === 'salad' ? 20 : (topping === 'potato' ? 15 : 0));
            const extraCalories = topping === 'cheese' ? 20 : (topping === 'salad' ? 5 : (topping === 'potato' ? 10 : 0));
            return { ...state, topping, cost: state.cost + extraCost, calories: state.calories + extraCalories };
        case 'TOGGLE_SEASONING':
            const seasoning = !state.seasoning;
            const seasoningCost = seasoning ? 15 : -15;
            const seasoningCalories = seasoning ? 5 : -5;
            return { ...state, seasoning, cost: state.cost + seasoningCost, calories: state.calories + seasoningCalories };
        case 'TOGGLE_MAYONNAISE':
            const mayonnaise = !state.mayonnaise;
            const mayonnaiseCost = mayonnaise ? 20 : -20;
            const mayonnaiseCalories = mayonnaise ? 10 : -10;
            return { ...state, mayonnaise, cost: state.cost + mayonnaiseCost, calories: state.calories + mayonnaiseCalories };
        default:
            return state;
    }
}

export default reducer;