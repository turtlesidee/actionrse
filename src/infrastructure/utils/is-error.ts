
export const is_error = (name: string) => (err: unknown) => {
  return err instanceof Error && err.name === name
}
