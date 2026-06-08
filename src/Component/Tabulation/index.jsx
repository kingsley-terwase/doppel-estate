import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FONT_FAMILY } from '../../Config/font'

const ReusableTable = ({
  title,
  columns = [],
  rows = [],
  emptyMessage = 'No data available',
}) => {
  const theme = useTheme()

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        overflow: 'hidden',
        borderRadius: '20px',

        backgroundColor: theme.palette.background.paper,

        border: `1px solid ${theme.palette.custom.card.border}`,

        boxShadow: '0px 4px 14px rgba(0,0,0,0.06)',
      }}
    >
      {/* Header */}
      {title && (
        <Box
          sx={{
            px: 3,
            py: 2.5,

            borderBottom: `1px solid ${theme.palette.custom.border.subtle}`,

            backgroundColor: theme.palette.custom.card.body,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,

              color: theme.palette.text.primary,

              fontFamily: FONT_FAMILY.primary,
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      {/* Table */}
      <TableContainer
        sx={{
          maxHeight: 500,

          backgroundColor: theme.palette.background.paper,

          '&::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.custom.border.subtle,
            borderRadius: '20px',
          },
        }}
      >
        <Table stickyHeader>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{
                    fontWeight: 700,

                    backgroundColor: theme.palette.custom.card.body,

                    color: theme.palette.text.primary,

                    whiteSpace: 'nowrap',

                    borderBottom: `1px solid ${theme.palette.custom.card.border}`,

                    fontSize: '14px',

                    fontFamily: FONT_FAMILY.secondary,

                    py: 2.2,
                  }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row, index) => (
                <TableRow
                  hover
                  key={row.id || index}
                  sx={{
                    backgroundColor: theme.palette.background.paper,

                    transition: 'all 0.2s ease',

                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}10`,
                    },

                    '&:last-child td': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                      sx={{
                        color: theme.palette.text.secondary,

                        borderBottom: `1px solid ${theme.palette.custom.border.subtle}`,

                        fontSize: '14px',

                        fontFamily: FONT_FAMILY.primary,

                        py: 2,
                      }}
                    >
                      {column.renderCell
                        ? column.renderCell(row)
                        : row[column.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  align="center"
                  sx={{
                    py: 5,

                    backgroundColor: theme.palette.background.paper,

                    color: theme.palette.text.secondary,

                    fontWeight: 600,

                    fontFamily: FONT_FAMILY.primary,
                  }}
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default ReusableTable