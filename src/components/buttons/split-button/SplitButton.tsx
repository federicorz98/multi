import { Box, ListItemText, Paper, Typography, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { SplitButtonProps } from './SplitButton.props';
import { StyledButton, StyledList } from './StyledButton';

/**
 * Styled Split Button
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=490-9404&t=QLJxRIMSWSHqMwVs-4} Figma Component
 * @since 1.0.0
 *  */
const SplitButton = ({ label, onClick, itemsList }: SplitButtonProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const paperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick: EventListener = (event: Event) => {
    let clickedElement = event.target as HTMLElement;
    while (clickedElement !== null) {
      if (clickedElement === paperRef.current || clickedElement === buttonRef.current) {
        return;
      }
      clickedElement = clickedElement.parentElement as HTMLElement;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Box display="flex" gap="1px" position="relative" height={32}>
      <StyledButton variant="contained" orientation="left" sx={{ maxHeight: 32 }} onClick={onClick}>
        <Typography
          color={theme.palette.text.onAction}
          variant="body2"
          style={{
            fontWeight: 600,
            lineHeight: '1.14',
            textTransform: 'none',
          }}
        >
          {label}
        </Typography>
      </StyledButton>

      <StyledButton
        variant="contained"
        orientation="right"
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        sx={{ maxWidth: 32, maxHeight: 32 }}
      >
        <CaretDown size={16} weight="bold" color={theme.palette.text.onAction} />
      </StyledButton>

      {open && (
        <Paper
          elevation={9}
          sx={{
            backgroundColor: 'surface.container.level1',
            position: 'absolute',
            right: 0,
            bottom: '-8px',
            transform: 'translateY(100%)',
            minWidth: 190,
          }}
          ref={paperRef}
        >
          <StyledList>
            {itemsList.map((item, index) => (
              <div key={index}>
                <ListItemText
                  sx={{
                    '&:hover': {
                      backgroundColor: 'surface.onAction.primary',
                    },
                  }}
                  onClick={item.onClick}
                >
                  <Typography
                    variant="body2"
                    color="text.default"
                    margin={0}
                    textAlign="left"
                    sx={{
                      padding: '11px 12px',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'text.selected',
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                </ListItemText>
              </div>
            ))}
          </StyledList>
        </Paper>
      )}
    </Box>
  );
};

export default SplitButton;
