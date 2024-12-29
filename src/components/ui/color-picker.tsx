interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  return (
    <div className="border border-borderPrimary rounded-md max-w-60 p-2 flex items-center justify-between">
      <p className="text-textPrimary text-sm">{color}</p>
      <input
        type="color"
        id="activeBorderColor"
        name="activeBorderColor"
        value={color}
        className="cursor-pointer focus:outline-none rounded-md w-10 h-6"
        onChange={(e) => {
          const newColor = e.target.value;
          onChange(newColor);
        }}
      />
    </div>
  );
};
