import { DataGridPro } from '@mui/x-data-grid-pro';
import { alpha, styled } from '@mui/material/styles';

/**
 * Styled MUI Data grid
 * @see {@link https://mui.com/x/api/data-grid/data-grid-pro} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=11932-83553&t=S5OZL4o8KrAZJWhm-4} Figma Component
 * @since 1.0.0
 *  */
const Table = styled(DataGridPro)(({ theme }) => ({
  backgroundColor: theme.palette.surface.container.level1,
  '--DataGrid-pinnedBackground': 'transparent',
  '&.tipBoxTable': {
    '& .MuiDataGrid-cell:hover': {
      backgroundColor: 'inherit !important',
    },
    '.MuiDataGrid-main': {
      borderRadius: theme.spacing(2, 2, 0, 0),
    },
    '.MuiDataGrid-columnHeader': {
      backgroundColor: theme.palette.datagrids.surface.header.buy,
      '&.CautionTable': {
        paddingRight: '50px',
      },
    },
    '.MuiDataGrid-cell': {
      borderBottom: 'none',
      backgroundColor: theme.palette.datagrids.surface.cell.buy,
      '&.CautionTable': {
        paddingRight: '50px',
      },
      '&.Buy-Column': {
        backgroundColor: theme.palette.datagrids.surface.cell.buy,
      },
      '&.Sell-Column': {
        backgroundColor: theme.palette.datagrids.surface.cell.sell,
      },
      '&:hover': {
        backgroundColor: 'red',
      },
    },
    '.MuiDataGrid-virtualScroller': {
      overflow: 'hidden',
    },
  },
  '& .MuiDataGrid-scrollbar--vertical': {
    zIndex: 1,
  },
  '&.MuiDataGrid-withBorderColor ': {
    borderRadius: 0,
    border: 'none',
    '--unstable_DataGrid-radius': 0,
  },
  // Header Styles
  '--DataGrid-containerBackground': theme.palette.datagrids.surface.header.main,
  '.MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.datagrids.surface.header.main,
    border: 'none',
  },
  // Row Styles
  '& .MuiDataGrid-cell': {
    borderRight: 'none',
    borderLeft: 'none',
  },
  '& .MuiDataGrid-filler': {
    height: '0px !important',
    border: '0px solid !important',
  },
  '.MuiDataGrid-row.background-guard': {
    backgroundColor: theme.palette.surface.container.level1,
    '&:hover, &.Mui-selected': {
      backgroundColor: theme.palette.surface.hover,
    },
  },
  // Add border to last row
  '.MuiDataGrid-row:last-of-type .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  // Main Content Styles
  '.MuiDataGrid-main': {
    color: theme.palette.text.body,
    '& .MuiSvgIcon-root': {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '.MuiButtonBase-root': {
      padding: 0,
    },
    '.MuiDataGrid-withBorderColor': {
      borderColor: theme.palette.border.divider,
    },
    '& .MuiDataGrid-columnHeaderCheckbox, .MuiDataGrid-cellCheckbox': {
      '& .MuiDataGrid-columnHeaderDraggableContainer': {
        width: 'auto',
      },
    },
    '& .MuiDataGrid-columnHeader': {
      padding: theme.spacing(0, 3),
      borderRadius: 0,
      '&.extraMargin': {
        paddingLeft: theme.spacing(6),
      },
      '.MuiDataGrid-columnHeaderTitle': {
        ...theme.typography.subtitle3,
      },
      '&:focus, &:focus-within, &:focus-visible': {
        outline: 'none',
      },
      '.MuiDataGrid-withBorderColor': {
        border: 'none',
      },
    },
    '& .label': {
      '& .MuiDataGrid-cell': {
        fontWeight: 700,
      },
    },

    '& .MuiDataGrid-cell': {
      ...theme.typography.body3,
      alignContent: 'center',
      padding: theme.spacing(3),
      '&.extraMargin': {
        paddingLeft: theme.spacing(5),
      },
      '& .MuiDataGrid-cell--editable': {
        maxHeight: theme.spacing(5),
        minHeight: theme.spacing(5),
      },
      '&.Hoverable-Cell': {
        padding: theme.spacing(0),
      },
      '&.CellBackground-Down': {
        backgroundColor: theme.palette.surface.error.status,
      },
      '&.CellBackground-Up': {
        backgroundColor: theme.palette.surface.success.status,
      },
      '&.Buy-Column': {
        backgroundColor: theme.palette.datagrids.surface.cell.buy,
        '& .Up': {
          backgroundColor: theme.palette.datagrids.surface.cell.buyUp,
          '&:hover': {
            backgroundColor: theme.palette.datagrids.surface.cell.buyUpHover,
          },
        },
        '& .Down': {
          backgroundColor: theme.palette.datagrids.surface.cell.buyDown,
          '&:hover': {
            backgroundColor: theme.palette.datagrids.surface.cell.buyDownHover,
          },
        },
      },
      '&.Sell-Column': {
        backgroundColor: theme.palette.datagrids.surface.cell.sell,
        '& .Up': {
          backgroundColor: theme.palette.datagrids.surface.cell.sellUp,
          '&:hover': {
            backgroundColor: theme.palette.datagrids.surface.cell.sellUpHover,
          },
        },
        '& .Down': {
          backgroundColor: theme.palette.datagrids.surface.cell.sellDown,
          '&:hover': {
            backgroundColor: theme.palette.datagrids.surface.cell.sellDownHover,
          },
        },
      },
      '&.CellTextColor-Up': {
        color: theme.palette.text.success.subtle,
      },
      '&.CellTextColor-Down': {
        color: theme.palette.text.error.main,
      },
      '&:focus, &:focus-within': {
        outline: 'none',
      },
      '&.clickable': {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: alpha(theme.palette.surface.hover, 0.12),
        },
      },
    },
    '.MuiDataGrid-columnHeader--sortable': {
      justifyContent: 'space-between',
      '.MuiDataGrid-iconButtonContainer': {
        paddingLeft: theme.spacing(2),
      },
      '&:not(.MuiDataGrid-columnHeader--alignRight)': {
        '&.extraMargin:hover': {
          paddingLeft: theme.spacing(5),
        },
        '&:hover': {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        },
        '& .MuiDataGrid-columnHeaderTitleContainerContent': {
          display: 'flex',
          flex: 1,
        },
      },
      '&:hover': {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        '.MuiDataGrid-columnHeaderTitleContainerContent, .MuiDataGrid-iconButtonContainer': {
          backgroundColor: theme.palette.surface.hover,
        },
        '.MuiDataGrid-columnHeaderTitleContainerContent': {
          padding: theme.spacing(2, 0, 2, 2),
          borderRadius: theme.spacing(2, 0, 0, 2),
        },
        '.MuiDataGrid-iconButtonContainer': {
          padding: theme.spacing(2),
          borderRadius: theme.spacing(0, 2, 2, 0),
        },
      },
    },
    '.MuiDataGrid-columnHeader--alignRight .MuiDataGrid-columnHeaderTitleContainer': {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    '.Buy-Column': {
      backgroundColor: theme.palette.datagrids.surface.header.buy,
      borderColor: theme.palette.border.divider,
    },
    '.Sell-Column': {
      backgroundColor: theme.palette.datagrids.surface.header.sell,
      borderColor: theme.palette.border.divider,
    },
    '.Mui-checked': {
      color: theme.palette.primary.main,
    },
  },

  //Style pinned cell to get same color than the rest of the row
  '& .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row .MuiDataGrid-cell--pinnedLeft': {
    backgroundColor: theme.palette.surface.container.level1,
  },
  '& .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row:hover .MuiDataGrid-cell--pinnedLeft': {
    backgroundColor: 'transparent',
    '&.clickable': {
      '&:hover': {
        backgroundColor: alpha(theme.palette.surface.hover, 0.12),
      },
    },
  },
  '& .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row .MuiDataGrid-cell--pinnedRight': {
    backgroundColor: theme.palette.surface.container.level1,
  },
  '& .MuiDataGrid-virtualScrollerContent .MuiDataGrid-row:hover .MuiDataGrid-cell--pinnedRight': {
    backgroundColor: 'transparent',
    '&.clickable': {
      '&:hover': {
        backgroundColor: alpha(theme.palette.surface.hover, 0.12),
      },
    },
  },
  // Pinned Columns and Headers Styles
  '& .MuiDataGrid-pinnedColumns, & .MuiDataGrid-pinnedColumnHeaders': {
    transition: theme.transitions.create('box-shadow', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
    backgroundImage: 'none',
  },
  '&.hasScrollToLeft .MuiDataGrid-pinnedColumns--left, &.hasScrollToRight .MuiDataGrid-pinnedColumns--right': {
    boxShadow: 'none',
  },
  '&.hasScrollToLeft .MuiDataGrid-pinnedColumnHeaders--left, &.hasScrollToRight .MuiDataGrid-pinnedColumnHeaders--right': {
    boxShadow: 'none',
  },
  '.MuiDataGrid-footerContainer': {
    '.MuiTablePagination-root': {
      overflow: 'hidden',
    },
  },
}));

export default Table;
