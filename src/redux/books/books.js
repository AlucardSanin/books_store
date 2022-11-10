const REMOVE = 'bookstore/books/REMOVE';
const CREATE = 'bookstore/books/CREATE';

const defaultState = [];

// define an action creator for adding books
export const addBook = (payload) => ({
  type: CREATE,
  payload,
});

// define an action creator for removing books
export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export default function books(state = defaultState, action) {
  const index = state.findIndex((object) => object.id === action.id);
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    case REMOVE:
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];

    default:
      return state;
  }
}
