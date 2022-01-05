import {
    DATA_FETCH_FAILURE,
    DATA_FETCH_REQUEST,
    DATA_FETCH_SUCCESS,
    SORT_ASC,
    SORT_DESC,
    SEARCH_CONTACT,
  } from "./actionTypes";
  
  const initialState = {
    loading: false,
    error: "",
    data: [],
  };
  
  const sortByAsc = (a, b, key) => {
    const obj1 = a[key];
    const obj2 = b[key];
  
    if (obj1 < obj2) {
      return 1;
    }
    if (obj1 > obj2) {
      return -1;
    }
    return 0;
  };
  
  const sortByDesc = (a, b, key) => {
    const obj1 = a[key];
    const obj2 = b[key];
  
    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }
    return 0;
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_FETCH_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DATA_FETCH_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case DATA_FETCH_FAILURE:
        return {
          loading: false,
          error: action.payload,
          data: [],
        };
      case SORT_ASC:
        return {
          data: state.data.sort((a, b) => {
            return sortByAsc(a, b, "firstName");
          }),
        };
      case SORT_DESC:
        return {
          data: state.data.sort((a, b) => {
            return sortByDesc(a, b, "firstName");
          }),
        };
      case SEARCH_CONTACT:
        return {
          data: state.data.filter((item) => {
            const firstLastName = item.firstName + " " + item.lastName;
            return firstLastName
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        };
      default:
        return state;
    }
  };
  
  export default reducer;