export const changeState = (payload) => {
  return (state)=> ({...state, ...payload})
}

export const toggleBool = (payload) => (state) => ({...state, [payload]:!state[payload]})