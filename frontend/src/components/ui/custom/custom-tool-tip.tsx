type TooltipProps = {
    active?: boolean;
    payload?: { value: number; name: string }[];
    label?: string;
  };

  export const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
    payload.forEach(() => {
    console.log(label);

    });

      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-md">
          <p className="font-bold">{label}</p>
          <ul>
            {payload.map((item, index) => (
              <li key={index} className="text-sm">
                {item.name == "value" ? "Hacim" : item.name}: <span className="font-medium">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };