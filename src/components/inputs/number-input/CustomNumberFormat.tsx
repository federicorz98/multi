import React, { useState } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { DECIMAL_SEPARATOR } from '@models/number.model';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  decimals?: number;
  allowNegative: boolean;
  prefix?: string;
}

export const CustomNumberFormat = React.forwardRef<NumericFormatProps, CustomProps>(function NumericFormatCustom(props, ref) {
  const { onChange, decimals, allowNegative, ...others } = props;
  const [timer, setTimer] = useState<number>();

  return (
    <NumericFormat
      {...others}
      getInputRef={ref}
      onValueChange={(values) => {
        if (timer) {
          clearTimeout(timer);
        }
        const newTimer = setTimeout(() => {
          onChange({
            target: {
              name: 'numberformat',
              value: values.value,
            },
          });
        }, 100);
        setTimer(newTimer);
      }}
      decimalSeparator={DECIMAL_SEPARATOR}
      valueIsNumericString
      allowNegative={allowNegative}
      decimalScale={decimals ?? 2}
    />
  );
});
