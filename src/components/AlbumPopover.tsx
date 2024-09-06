import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Pen } from "lucide-react";

export default function AlbumPopover({ content }: { content?: string[] }) {
    if (!content) return <></>;
    return (
        <Popover>
            <PopoverTrigger>
                <Pen size={16} className="hover:stroke-soto-100" />
            </PopoverTrigger>
            <PopoverContent>
                <div className="prose">
                    {content.map((item, index) => (
                        <p key={index} className="text-xs">{item}</p>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}