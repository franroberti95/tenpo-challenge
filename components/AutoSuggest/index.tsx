import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Input from '../Input';
import SearchIcon from '../../assets/icons/search.svg';
import {SuggestionI, Suggestions} from './Suggestions';

let searchTimeout: NodeJS.Timeout | null = null;
const CHARACTERS_THRESH_HOLD = 4;
const DELAY_MS = 500;

interface AutoSuggestI {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  onSearch?: (value: string) => Promise<SuggestionI[]>;
  onOptionSelect?: (item: SuggestionI) => void;
}

const AutoSuggest = ({
  label,
  value,
  onChange,
  onSearch,
  onOptionSelect,
}: AutoSuggestI) => {
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const onFocus = () => setSuggestionsOpen(true);
  const onBlur = () => setSuggestionsOpen(false);
  const onOptionPress = (opt: SuggestionI) => {
    setSuggestionsOpen(false);
    onOptionSelect(opt);
  };

  const onChangeValue = (val: string) => {
    onChange(val);

    if (!suggestionsOpen) {
      setSuggestionsOpen(true);
    }

    if (CHARACTERS_THRESH_HOLD > val.length) {
      return;
    }

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    searchTimeout = setTimeout(
      () => onSearch(val).then(r => setSuggestions(r)),
      DELAY_MS,
    );
  };

  return (
    <View>
      <Input
        rightIcon={
          <TouchableOpacity onPress={() => onSearch(value)}>
            <SearchIcon />
          </TouchableOpacity>
        }
        placeholder={label}
        inputProps={{onFocus, onBlur}}
        value={value}
        onChange={onChangeValue}
      />
      {suggestionsOpen && (
        <Suggestions
          onOptionPress={onOptionPress}
          suggestions={suggestions}
          onClose={onBlur}
        />
      )}
    </View>
  );
};

export default AutoSuggest;
