export const getImagePath = thumbnail => {
  const { path, extension } = thumbnail;
  return `${path}.${extension}`;
}