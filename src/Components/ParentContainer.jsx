function ParentContainer({children}){

  return(
    <>

      <div className="container-fluid colorOverImage" >
        <div className="row">
          <div className="col-12 d-flex align-center justify-content-center colorOverImage backgroundContainer" style={{}}>
            {children}
          </div>
        </div>
      </div>

    </>
  )
}
export default ParentContainer;