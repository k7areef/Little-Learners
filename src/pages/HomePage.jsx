import useChangeTitle from "@hooks/useChangeTitle";

function HomePage() {
    useChangeTitle("Home");
    return (
        <div className="home-page">
            HomePage
        </div>
    )
}

export default HomePage;