import { Button } from "@/components/ui/button"
import { toast } from "sonner"


export function SonnerToastDemo() {

    return (
        <div className="flex flex-auto gap-3">
            <Button
                variant="outline"
                onClick={() => toast.success("Event has been created", {
                    duration: 1000,
                })}
            >
                Show Success Toast
            </Button>
            <Button
                variant="destructive"
                onClick={() => toast.error("Event has been created", {
                    duration: 2000,
                })}
            >
                Show Error Toast
            </Button>
            <Button
                variant="secondary"
                onClick={() => toast.info("Event has been created", {
                    duration: 1000,
                })}
            >
                Show Info Toast
            </Button>
        </div>
    )
}


