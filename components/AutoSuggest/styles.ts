import styled from 'styled-components/native';
import RoundedTopContainer from '../RoundedTopContainer';

export const SuggestionsMainContainer = styled.View`
  background-color: ${props => props.theme.WHITE};
`;


export const SuggestionsContainer = styled.View`
`;
export const SuggestionContainer = styled.TouchableOpacity`
  border-bottom-width: 2px;
  padding: 16px;
  border-bottom-color: ${props => props.theme.LIGHTER_GREY};
`;
