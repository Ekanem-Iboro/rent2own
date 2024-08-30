import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useSliderStore from "../../store/Slide"; // Import the store

const marks = [
  { value: 6, label: "6" },
  { value: 12, label: "12" },
  { value: 24, label: "24" },
  { value: 36, label: "36" },
  { value: 48, label: "48" },
];

interface RangeSliderProps {
  name: string;
  onChange: (value: number) => void;
}

export default function RangeSlider({ name, onChange }: RangeSliderProps) {
  const { value, setValue } = useSliderStore(); // Use Zustand store

  const handleRangeChange = (event: Event, newValue: number | number[]) => {
    event.preventDefault();
    const newValueNumber = Number(newValue);
    setValue(newValueNumber); // Update Zustand store
    onChange(newValueNumber); // Notify parent form about the change
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Custom marks"
        min={6}
        max={48}
        value={value}
        name={name}
        defaultValue={6}
        // disabled
        onChange={handleRangeChange}
        step={6}
        marks={marks}
        sx={{
          height: "9px",
          color: "#6FC200", // Color for the part covered by the thumb
          "& .MuiSlider-rail": {
            backgroundColor: "white",
            transition: "background-color 0.3s ease-in-out", // Smooth transition for rail
          },
          "& .MuiSlider-track": {
            backgroundColor: "#6FC200", // Color for the part covered by the thumb
            border: "none",
            transition: " 0.5s ease-in-out", // Smooth transition for track
          },
          "& .MuiSlider-thumb": {
            width: 24,
            height: 24,
            backgroundColor: "#FFFFFF", // White color for the thumb
            border: "2px solid #6FC200",
            transition: " 0.5s ease-in-out", // Smooth transition for thumb
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(100, 100, 100, 0.16)",
            },
          },
          "& .MuiSlider-markLabel": {
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            marginTop: "10px",
          },
        }}
      />
    </Box>
  );
}
