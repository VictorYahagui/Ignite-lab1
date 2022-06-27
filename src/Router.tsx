import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Subscribe } from "./pages/Subscribe";
import { Event } from "./pages/Event";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subscribe />}></Route>
                <Route path="/event" element={<Event />}></Route>
                <Route path="/event/lesson/:slug" element={<Event />}></Route>
            </Routes>
        </BrowserRouter>
    );
}