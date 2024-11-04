import * as CustomChip from '@mui/material/Chip';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    successGhost: true;
    successOutlined: true;
    rejectedGhost: true;
    rejectedOutlined: true;
    pendingGhost: true;
    pendingOutlined: true;
    success: true;
    rejected: true;
    pending: true;
    default: true;
    defaultOutlined: true;
    defaultGhost: true;
    fieldData: true;
    delete: true;
  }
}

export default CustomChip;
