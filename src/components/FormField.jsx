import { Box, TextField } from "@mui/material"

const FormField = ({ value, onChange, label, placeholder, multiline = false, rows = undefined, type, sx = undefined, fullWidth = undefined  }) => {
    return (
        <div>
                <TextField
                    fullWidth={fullWidth}
                    autoComplete={"true"}
                    required
                    label={label}
                    variant="outlined"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    type={type}
                    multiline={multiline}
                    rows={rows}
                    sx={sx}
                />
        </div>
    )
}

export default FormField