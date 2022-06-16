import Body from '../CustomText/body';
import {mainTheme} from '../../styles/theme';
import React from 'react';
import {
  SuggestionContainer,
  SuggestionsContainer,
  SuggestionsMainContainer,
} from './styles';

export interface SuggestionI {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  item?: any;
}

interface SuggestionsI {
  suggestions: SuggestionI[];
  onClose: () => void;
  onOptionPress: (opt: SuggestionI) => void;
}

export const Suggestions = ({suggestions, onOptionPress}: SuggestionsI) => (
  <SuggestionsMainContainer>
    <SuggestionsContainer>
      {suggestions.map((s, k: number) => (
        <Suggestion {...s} key={k} onPress={() => onOptionPress(s)} />
      ))}
    </SuggestionsContainer>
  </SuggestionsMainContainer>
);

export const Suggestion = ({title, subtitle, onPress}: SuggestionI) => (
  <SuggestionContainer onPress={onPress}>
    <Body color={'#333333'}>{title}</Body>
    <Body color={mainTheme.LIGHT_GREY}>{subtitle}</Body>
  </SuggestionContainer>
);
