export const ActionType = {
  SET_CURRENT_MOUNTAIN: 'mountains/setCurrentMountain'
};

export const ActionCreator = {
 setCurrentMountain: (newMountain) => ({
   type: ActionType.SET_CURRENT_MOUNTAIN,
   payload: newMountain,
 })
};
