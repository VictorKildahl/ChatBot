import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "./ui/button";

export default function Previous() {
  return (
    <Button
      variant="link"
      className="rounded-full"
      onClick={() => window.location.reload()}
    >
      <ArrowBackIcon />
    </Button>
  );
}
