function ContentPage () {

    return (
        <>
        <h1>본문</h1>
        <form>
            <input id="java" placeholder="입력란" onSubmit = {() => console.log("a")}/>
        </form>
        </>
    );
}

export default ContentPage;