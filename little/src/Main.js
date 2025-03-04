function Main() {
    return (
      <React.Fragment className="Main">
          <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
          </Routes>
        

      </React.Fragment>
    );
  }
  export default Main;