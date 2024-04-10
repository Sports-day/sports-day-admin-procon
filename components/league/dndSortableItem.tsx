import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";
import Item from "./dndItem";
import {Card} from "@mui/material";

const SortableItem = ({ id }: { id: UniqueIdentifier }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            <Card sx={{p:2, backgroundColor:"primary.main", color:"secondary.main"}}>
                <Item id={id} />
            </Card>
        </div>
    );
};

export default SortableItem;