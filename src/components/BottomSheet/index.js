import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {UserAuthContext} from 'store/AuthContext';

const BottomSheet = ({children}) => {
  const {bottomSheetModalRef} = useContext(UserAuthContext);

  // variables
  const snapPoints = ['60%', '60%'];

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onDismiss={() => setActivePage('start')}>
      {children}
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({});

export default BottomSheet;
