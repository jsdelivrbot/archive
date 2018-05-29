import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [{item:action.payload.data, blockId:action.meta.blockId}, ...state];
  }
  return state;
}
  