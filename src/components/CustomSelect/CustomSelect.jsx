import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: provided => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors- text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--color-ui-base)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radii);
  border: none;
  & > * {
    box-shadow: var(--colors-text);
  }
  & input {
    padding-left: 0.25rem;
  }
  &* {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--color-ui-base);
  }
`;
