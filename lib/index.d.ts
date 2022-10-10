declare module 'letter-count' {
  function countFromFile(
    option: string,
    path: string
  ): Record<string, string | number>;

  const count: (option: string, value: string) => Record<string, string | number>;
  const info: () => Record<string, string | number>;
}
