module.exports = {
  // success messages
  userRegisterSuccess: "User registered successfully",
  userLoginSuccess: "User logged in successfully",
  createNoteSuccess: "Note created successfully",
  editNoteSuccess: "Note edited successfully",
  deleteNoteSuccess: "Note deleted successfully",
  getNoteSuccess: "Note retrieved successfully",
  listNoteSuccess: "Todos fetched successfully",

  // error messages
  userAuthTokenError:
    "You are not authorized to access this request. Please provide valid access token",
  userRegisterError:
    "User with the same email already exists. Please register with another one",
  userLoginError: "Incorrect email or password. Please try again",
  userLoginAuthError: "Oops! Something went wrong while authenticating.",
  createNoteError: "Oops! Having an error while creating a note",
  editNoteError: "Oops! Having an error while updating a note",
  deleteNoteError: "Oops! Having an error while deleting a note",
  getNoteError: "Oops! unable to find the details for given note",
  notFoundError: "Sorry! We can not find something similar to this",
};
