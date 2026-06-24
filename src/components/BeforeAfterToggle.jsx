import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from 'react';
import ImageSection from "@/components/ImageSection";


export default function BeforeAfterToggle({ beforeLabel="Before", afterLabel="After", beforeImage, afterImage, beforeAlt, afterAlt }) {

    const [current, setCurrent] = useState('before')

    const toggleCurrent = (newValue) => {
        if (current == 'before' && newValue ) {
            setCurrent('after');
        } else if (current == 'after' && newValue) {
            setCurrent('before');
        }
    }

  return (
    <>
        <div className="flex justify-center mt-4xl">
            <ToggleGroup type="single" spacing={0}  value={current} aria-label="Before After Toggle" onValueChange={toggleCurrent}>
                <ToggleGroupItem  variant="outline"  value="before" aria-label="Before" className="min-w-[80px]">
                    {beforeLabel}
                </ToggleGroupItem>
                <ToggleGroupItem  variant="outline"  value="after" aria-label="After" className="min-w-[80px]">
                    {afterLabel}
                </ToggleGroupItem>
            </ToggleGroup>
        </div>

        <ImageSection maxWidth="max-w-[100%] md:max-w-[600px]" className="mt-md!" src={current=='before' ? beforeImage : afterImage} alt={current=="before" ? beforeAlt : afterAlt} />
    </>
  )
}