import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ShimmerMenu = ()=>{
    return(
        <Stack  spacing={1}>
          <Skeleton variant="rectangular" width={500} height={150} />
        </Stack>
    )
}

export default ShimmerMenu;

