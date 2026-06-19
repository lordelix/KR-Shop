import { dev } from '$app/environment';

export async function fetchWithErrorHandling<T>(
  fetchFn: () => Promise<{
    data?: T;
    error?: { message: string };
    response: Response;
  }>
): Promise<T> {
  const { data, error, response } = await fetchFn();

  if (response.status === 204) {
    return null as unknown as T;
  }

  if (error || data === undefined) {
    if (dev) {
      console.error(error);
    }

    throw error;
  }

  return data;
}
