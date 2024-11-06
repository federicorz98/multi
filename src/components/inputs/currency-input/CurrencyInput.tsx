import { useEffect } from 'react';
import NumberInput from '../number-input/NumberInput';
import { Currency } from '@models/currency.model';
import { CurrencyInputProps } from './CurrencyInput.props';

/**
 * Styled Currency input
 * @since 1.0.0
 *  */
const CurrencyInput = ({ currency = 'ARS', error, handleChangeError, defaultValue, ...rest }: CurrencyInputProps) => {
  const CurrencyOptions: Record<Currency, string> = {
    ARS: 'ARS',
    USD: 'USD',
    EXT: 'USD EXT',
  };

  const formattedCurrency = CurrencyOptions[currency];

  useEffect(() => {
    if (handleChangeError) {
      handleChangeError(error !== undefined);
    }
  }, [error]);

  return <NumberInput fullWidth defaultValue={defaultValue} error={error} {...rest} prefix={formattedCurrency} />;
};

export default CurrencyInput;
