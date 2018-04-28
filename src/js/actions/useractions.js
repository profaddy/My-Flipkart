export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Will",
      pwd: 35,
    }
  }
}

export function setUserName(name) {
   console.log('console user actions',name)
  return {
   type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserPwd(pwd) {
  return {
    type: 'SET_USER_PWD',
    payload: pwd,
  }
}
export function setUserdetails(name,pwd,email) {
  return {
    type: 'SET_USER_DETAILS',
    payload: {
    name,
    pwd,
    email
  }
  }
}
