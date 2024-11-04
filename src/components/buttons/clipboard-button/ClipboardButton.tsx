import { useState } from 'react';
import { IconButton } from '@mui/material';
import { CheckCircle, CopySimple } from '@phosphor-icons/react';
import { ClipboardButtonProps } from './ClipboardButton.props';
import Tooltip from '@components/tooltip/Tooltip';

const ClipboardButton = ({ toolTipText, copyText, iconProps, toolTipCopiedText, ...props }: ClipboardButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(copyText);
    setCopied(true);
  };

  return (
    <Tooltip
      placement="top"
      arrow
      title={copied ? (toolTipCopiedText ?? 'Copied!') : toolTipText}
      onPointerLeave={() => {
        setCopied(false);
      }}
    >
      <IconButton sx={{ padding: 2 }} onClick={handleCopyToClipboard} {...props}>
        {copied ? <CheckCircle {...iconProps} /> : <CopySimple {...iconProps} />}
      </IconButton>
    </Tooltip>
  );
};

export default ClipboardButton;
