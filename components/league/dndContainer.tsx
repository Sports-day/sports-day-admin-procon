import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./dndSortableItem";
import {Card, Stack, Typography} from "@mui/material";
import PlaceHolder from "@/components/league/dndPlaceHolder";

const SortableContainer = ({
                               id,
                               items,
                               label,
                           }: {
    id: string;
    items: string[];
    label: string;
}) => {
    const { setNodeRef } = useDroppable({
        id,
    });
    return (
        <div>
            <Typography pl={1}>{label}</Typography>
            <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
                <div
                    ref={setNodeRef}
                >
                    <Card variant={"outlined"} sx={{minWidth:"148px", minHeight:"70vh"}}>
                        <Stack spacing={0.5} m={1}>
                            <PlaceHolder/>
                            {items.map((id: string) => (
                                <SortableItem key={id} id={id} />
                            ))}
                        </Stack>
                    </Card>
                </div>
            </SortableContext>
        </div>
    );
};

export default SortableContainer;
