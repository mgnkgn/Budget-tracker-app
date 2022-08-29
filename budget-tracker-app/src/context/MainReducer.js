export default (state, action) => {
  switch (action.type) {
    case "PUSH_INCOME":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "PUSH_EXPENSE":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
