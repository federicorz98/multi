import { IconButton } from '@mui/material';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { LinkButtonProps } from './LinkButton.props';
import Tooltip from '@components/tooltip/Tooltip';

const LinkButton = ({ toolTipText, url, newTab, iconProps, ...props }: LinkButtonProps) => {
  const openLink = () => {
    window.open(url, newTab ? '_blank' : '_self');
  };

  return (
    <Tooltip placement="top" arrow title={toolTipText}>
      <IconButton sx={{ padding: 2 }} onClick={openLink} {...props}>
        <ArrowSquareOut {...iconProps} />
      </IconButton>
    </Tooltip>
  );
};

export default LinkButton;
