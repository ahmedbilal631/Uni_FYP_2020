import { SEARCH } from "../../actions/SearchAction";

const INITIAL_STATE = {
  SearchStories: [
    {
      id: "2",
      image: "",
      status: "Found",
      name: "Haseeba",
      age: "teen",
      gender: "female",
      location: "Lahore",
      description: "xyz",
      disability: "mental",
      mobile: "+92 306 7134632",
      post_By: "Fayyaz"
    },
    {
      id: "3",
      image: "",
      status: "Missing",
      name: "Asif",
      age: "teen",
      gender: "male",
      location: "Karachi",
      description: "xyz",
      disability: "mental",
      mobile: "+92 306 7134632",
      post_By: "Naveed"
    }
  ]
};

function SearchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        SearchStories: action.data
      };
    }

    default:
      return state;
  }
}

export default SearchReducer;
