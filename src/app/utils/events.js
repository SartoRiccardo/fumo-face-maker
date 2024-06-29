export const onSpacePress = (callback) => (evt) => {
  if (evt.key === " " || evt.code === "Space") callback(evt);
};
