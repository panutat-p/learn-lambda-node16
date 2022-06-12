console.log('init 🟩');

(async () => {
  await new Promise((r) => setTimeout(r, 2000));
  console.log('configured 🟧');
})();

export async function handler() {
  await new Promise((r) => setTimeout(r, 2000));
  const response = {
    statusCode: 200,
    body: 'Hello 🟦',
  };
  return response;
}
