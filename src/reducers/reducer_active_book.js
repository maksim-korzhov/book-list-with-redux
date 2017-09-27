// state arg is not the app state,
// it's only state for this reducer
export default function(state = null, action) {
    switch( action.type ) {
        case "BOOK_SELECTED":
            return action.payload;
            break;
    }

    return state;
}