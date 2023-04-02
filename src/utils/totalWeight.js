const totalWeight = allPosts => {
  let totalWeight = 0;
  allPosts.forEach(item => {
    item.fishing.forEach(i => {
      totalWeight += i.weight;
    });
  });
  return totalWeight;
};

export default totalWeight;
