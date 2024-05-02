import { Carousel } from "./components/Carousel";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

// It's page and component, what App.tsx refers to
export const HomePage = () => {
    return (
        <> {/* React specific parent, nothing inside, React way */} 
            {/* <Carousel/> */}
            <Heros/>
            {/* <LibraryServices/> */}
        </>
    );
}