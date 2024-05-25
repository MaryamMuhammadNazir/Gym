import React, {createContext, useRef} from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const UserAuthContext = createContext();

const AuthProvider = ({children}) => {
  const bottomSheetModalRef = useRef(null);

  const presentBottomSheet = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  };

  return (
    <UserAuthContext.Provider value={{bottomSheetModalRef, presentBottomSheet}}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </UserAuthContext.Provider>
  );
};

export default AuthProvider;
