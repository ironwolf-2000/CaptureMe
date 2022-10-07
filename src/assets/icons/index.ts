import styled, { css } from 'styled-components';
export { ReactComponent as SearchIcon } from './search.svg';

interface ISvgStylesProps {
    height?: number;
    color?: string;
    hoverColor?: string;
}

const svgStyles = ({ height, color, hoverColor }: ISvgStylesProps) => {
    return css`
        height: ${height ?? '1.5rem'};
        path {
            fill: ${color ?? 'black'};
        }
        &:hover path {
            fill: ${hoverColor ?? 'black'};
        }
    `;
};

// const StyledSearchIcon = styled(SearchIcon)<ISvgStylesProps>`
//     ${props => svgStyles(props)}
// `;
