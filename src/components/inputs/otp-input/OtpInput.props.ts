export type OtpInputProps = {
  separator?: React.ReactNode;
  length: number;
  value: string;
  error?: string | boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};
