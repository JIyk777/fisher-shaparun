const showModalAddFishing = state => state.modal.showModalAddFishing;
const showModalAddPond = state => state.modal.showModalAddPond;
const showModalMap = state => state.modal.showModalMap;
const getRiverId = state => state.modal.riverId;
const getLocation = state => state.modal.location;

export const modalSelectors = {
  showModalAddPond,
  showModalAddFishing,
  showModalMap,
  getRiverId,
  getLocation,
};
