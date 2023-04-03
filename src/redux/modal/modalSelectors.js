const showModalAddFishing = state => state.modal.showModalAddFishing;
const showModalAddPond = state => state.modal.showModalAddPond;
const getRiverId = state => state.modal.riverId;

export const modalSelectors = {
  showModalAddPond,
  showModalAddFishing,
  getRiverId,
};
