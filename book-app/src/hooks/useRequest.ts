export const useRequest = (url: string) => {

  // useState useEffect

  return {
    isLoading: false, // stan ładowania
    error: null, // błąd (null lub Error)
    data: [], // dane z API
  } // dane z API
}
