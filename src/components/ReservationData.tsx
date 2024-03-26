"use client"

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from "@mui/material";

export default function ReservationData({
    price,
    dateLabel,
    numLabel
} : {
    price: number,
    dateLabel: string,
    numLabel: string
}) {
    var amount:number = 0;

    return(
        <div className="flex flex-col">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={dateLabel}
                />
            </LocalizationProvider>
            <TextField
                placeholder={numLabel}
                type="number"
                inputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                    min: 1
                }}
                className="my-2"
                id="numField"
                onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) => {
                        amount = parseInt(event.target.value)
                    }
                }
            />
            {amount * price}
        </div>
    )
}