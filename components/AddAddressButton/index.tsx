import React from 'react';
import {TouchableOpacity} from 'react-native';
import MainImage from '../../assets/images/add-location.png';
import {AddAddressImage, AddAddressButtonContainer} from './styles';

interface AddAddressButtonI {
  onPress: () => void;
}

const AddAddressButton = ({onPress}: AddAddressButtonI) => (
  <AddAddressButtonContainer>
    <TouchableOpacity onPress={onPress}>
      <AddAddressImage source={MainImage} />
    </TouchableOpacity>
  </AddAddressButtonContainer>
);

export default AddAddressButton;
