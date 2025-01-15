export async function getFaceOptions() {
  const response = await fetch(`${process.env.BACKEND}/face/list`);
  return await response.json();
}

export async function downloadFace(params) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND +
      "/face?" +
      new URLSearchParams(params).toString()
  );
  return await response.blob();
}
