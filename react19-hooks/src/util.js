export default async function promiseFn(text) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({ id: Date.now(), text });
      } else {
        reject(new Error("Failed to save comment"));
      }
    }, 3000);
  });
}
