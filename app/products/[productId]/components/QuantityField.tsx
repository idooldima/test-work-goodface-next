import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";

const QUANTITY_OPTIONS = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export function QuantityField({ name }: { name: string }) {
  return (
    <FormField
      name={name}
      render={({ field }) => {
        const index = QUANTITY_OPTIONS.indexOf(field.value);

        return (
          <FormItem className="space-y-4">
            {/* Tooltip */}
            <div className="relative pt-[40px]">
              <div
                className="absolute -top-5 translate-x-[-50%]"
                style={{
                  left: `${(index / (QUANTITY_OPTIONS.length - 1)) * 100}%`,
                }}
              >
                <p className="bg-primary-500 rounded-[4px] px-2 py-1 text-xs whitespace-nowrap text-white">
                  {field.value} IP
                </p>
              </div>

              <div className="lslsldsldsl">dsdasda dddddsdsda</div>

              <FormControl>
                <Slider
                  value={[index]}
                  min={0}
                  max={QUANTITY_OPTIONS.length - 1}
                  step={1}
                  onValueChange={(v) => field.onChange(QUANTITY_OPTIONS[v[0]])}
                />
              </FormControl>
            </div>

            {/* Labels */}
            <div className="text-muted-foreground flex justify-between text-xs">
              {QUANTITY_OPTIONS.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </FormItem>
        );
      }}
    />
  );
}
