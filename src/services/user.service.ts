

export function getUser () {
  return new Promise<{ data: string }>((resolve) => {
    setTimeout(() => {
      resolve({ data: '123' });
    }, 1000)
  })
}