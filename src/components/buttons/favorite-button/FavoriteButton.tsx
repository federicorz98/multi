import { useTheme } from '@mui/material';
import { Star } from '@phosphor-icons/react';
import { FavoriteButtonProps, Size } from './FavoriteButton.props';
import Tooltip from '@components/tooltip/Tooltip';
import IconButton from '../icon-button/IconButton';
import IconButtonDataGrid from '../icon-button/data-grid/IconButtonDataGrid';

const sizes: Record<Size, number> = {
  s: 18,
  m: 22,
  l: 32,
};

/**
 * Styled Favorite Button
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=8537-30174&t=jsxu5z5TZeEE8QZm-4} Figma Component
 * @since 1.0.0
 *  */
const FavoriteButton = ({
  onClick,
  isFavorite = false,
  isLoading = false,
  disabled = false,
  size = 'm',
  grid = false,
}: FavoriteButtonProps) => {
  const { palette } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoading && onClick) {
      onClick(e);
    }
  };

  const star = (
    <Tooltip arrow placement="top" title={isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}>
      <Star size={sizes[size]} weight={isFavorite ? 'fill' : 'regular'} />
    </Tooltip>
  );

  const props = {
    disabled,
    styles: {
      color: isFavorite ? palette.icon.action.secondary : palette.icon.default,
      '&:hover': {
        backgroundColor: 'hsla(0, 0%, 0%, 0)',
        color: isFavorite ? palette.icon.action.secondary : palette.icon.default.secondary,
      },
    },
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => handleClick(e),
  };

  return grid ? <IconButtonDataGrid {...props}>{star}</IconButtonDataGrid> : <IconButton {...props}>{star}</IconButton>;
};

export default FavoriteButton;
