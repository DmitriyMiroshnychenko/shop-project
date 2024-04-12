export function reducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TO_BASKET': {
      const itemIndex = state.findIndex(
        (orderItem) => orderItem.id === payload.id
      );

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    default:
      return state;
  }
}