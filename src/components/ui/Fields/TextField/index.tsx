import React, { useEffect, useState } from 'react';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import { Field, FieldHookConfig, useField, useFormikContext } from 'formik';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export const InputField = ({
    label,
    type,
    ...props
  }: TextFieldProps & FieldHookConfig<string>) => {
    const [field, meta, helpers] = useField(props);
    const { status } = useFormikContext();
    const { error, touched } = meta;
    const errorText = error || (status && status[props.name]) || null;
    const hasError = !!error || !!(status && status[props.name]);
    const [showPassword, setShowPassword] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    useEffect(() => {
      setIsPassword(type === 'password');
    }, []);
  
    return (
      <Field
        as={TextField}
        type={showPassword && isPassword ? 'text' : type}
        InputProps={{
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <Visibility fontSize="small" />
                ) : (
                  <VisibilityOff fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
        helperText={errorText}
        label={label}
        fullWidth
        style={{ marginBottom: 20 }}
        variant="outlined"
        error={hasError}
        {...props}
      />
    );
};