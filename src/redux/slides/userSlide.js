import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  id: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        name = "",
        email = "",
        phone = "",
        address = "",
        avatar = "",
        _id = "",
        access_token = "",
      } = action.payload;
      console.log("action", action);
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.address = address;
      state.avatar = avatar;
      state.id = _id;
      state.access_token = access_token;
    },
    resetUser: (state, action) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.address = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions;

// export default userSlice.reducer;
export const userReducer = userSlice.reducer;
