export type Size = 's' | 'm' | 'l';

interface DialogButtonProps {
  onClick: () => void;
  label: string;
  disabled: boolean;
  loadingText: string;
  isLoading: boolean;
}

export interface DialogProps {
  header: React.ReactNode;
  body?: React.ReactNode;
  footerCaption?: React.ReactNode;
  closeCross?: boolean;
  size?: Size;
  primary: Partial<DialogButtonProps>;
  secondary: Partial<DialogButtonProps>;
  showHeaderBorder?: boolean;
  showFooterBorder?: boolean;
  isModal?: boolean;
  onClose: () => void;
}
