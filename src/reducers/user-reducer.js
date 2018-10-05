/** CREATING USER REDUCER **/
export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case "userUpdate":
      return payload;
  }
  return state;
}
