// import { createContext, useCallback, useEffect, useState } from "react";
// import { localStorageKeys } from "../config/localStorageKeys";
// import { usersService } from "../services/usersService/index";
// import { useQuery } from "@tanstack/react-query";
// import { httpClient } from "../services/HttpClient";
// import toast from "react-hot-toast";
// import { PageLoader } from "../../view/components/PageLoader";


// interface AuthContextValue {
//   signedIn: boolean;
//   signin(accessToken: string): void;
//   signout(): void;
// }

// export const AuthContext = createContext({} as AuthContextValue)

// export function AuthProvider({children}: {children: React.ReactNode}) {
//   const [signedIn, setSignedIn] = useState<boolean>(() => {
//     const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

//     return Boolean(storedAccessToken);
//   });

//   const setAccessToken = useCallback((accessToken: string) => {
//     httpClient.defaults.headers.Authorization = `Bearer ${accessToken}`
//   }, []);

//   useEffect(() => {
//     const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

//     if(storedAccessToken) {
//       setAccessToken(storedAccessToken)
//     }
//   }, [setAccessToken])

//   const { isError, isFetching, isSuccess, remove } = useQuery({
//     queryKey: ['users', 'me'],
//     queryFn: () => usersService.me(),
//     enabled: signedIn,
//     staleTime: Infinity,
//   });

//   const signin = useCallback((accessToken: string) => {
//     localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
//     setAccessToken(accessToken);

//     setSignedIn(true);
//   }, [setAccessToken])

//   const signout = useCallback(() => {
//     localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
//     remove()
//     setSignedIn(false);
//   }, [remove])

//   useEffect(() => {
//     if(isError) {
//       signout();
//       toast.error('Session expired. Please sign in again.');
//     }
//   }, [isError, signout])

//   if(isFetching){
//     return <PageLoader />
//   }

//   return (
//     <AuthContext.Provider value={{
//         signedIn: isSuccess && signedIn,
//         signin,
//         signout
//       }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
