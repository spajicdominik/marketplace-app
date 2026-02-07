import AuthBar from "./components/AuthBar";
import SearchSection from "./components/SearchSection";
import TopNavMegaMenu from "./components/TopNavMegaMenu";

export default function Header({isLogedIn} : {isLogedIn : boolean}) {
    return (
        <div className="">
            <AuthBar isLogedIn = {isLogedIn}></AuthBar>
            <SearchSection></SearchSection>
            <TopNavMegaMenu></TopNavMegaMenu>
        </div>
    );
}