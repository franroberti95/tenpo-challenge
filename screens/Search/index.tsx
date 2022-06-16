import React, {useState} from 'react';
import AutoSuggest from '../../components/AutoSuggest';
import AddAddressButton from '../../components/AddAddressButton';
import {
  AddAddressButtonContainer,
  AutoSuggestContainer,
  SearchContainer,
} from './styles';

const Search = () => {
  const [addressText, setAddressTextValue] = useState('');

  return (
    <SearchContainer>
      <AddAddressButtonContainer>
        <AddAddressButton onPress={() => {}} />
      </AddAddressButtonContainer>
      <AutoSuggestContainer>
        <AutoSuggest
          value={addressText}
          onChange={setAddressTextValue}
          onSearch={async () => [
            {
              title: 'Agustinas 540',
              subtitle: 'Santiago, Región Metropolitana, Chile',
            },
            {
              title: 'Agustinas 540',
              subtitle: 'Santiago, Región Metropolitana, Chile',
            },
            {
              title: 'Agustinas 540',
              subtitle: 'Santiago, Región Metropolitana, Chile',
            },
            {
              title: 'Agustinas 540',
              subtitle: 'Santiago, Región Metropolitana, Chile',
            },
          ]}
          onOptionSelect={opt => {
            setAddressTextValue(opt.title);
          }}
        />
      </AutoSuggestContainer>
    </SearchContainer>
  );
};

export default Search;
