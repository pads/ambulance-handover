interface ApiResponse<T> {
  data?: T;
  error?: any;
}

export const apiService = async <T>(
  resources: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/${resources}`
    );
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
