import Container from "react-bootstrap/Container";
import { BsBag } from "react-icons/bs";

function Application() {
  return (
    <Container className=" col-xs-12 container text-center m-0 ">
      <div className="row d-flex ">
        <div className="col-sm-6 col-xs-6 p-2 border ">
          <div className="row mx-auto">
            <div className="col-8 p-2">
              <div className="text-start">
                <h3 className="text-primary m-0 ">23</h3>
                <div className="text-muted mt-3">
                  Total <br /> job Applied
                </div>
              </div>
            </div>
            <div className="col-2 mt-3 mb-5  ">
              <BsBag className="float-end bg-light " />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xs-6 p-2 border">
          <div className="row mx-auto">
            <div className="col-8 p-2">
              <div className="text-start">
                <h3 className="text-primary m-0 ">12</h3>
                <div className="text-muted mt-3">
                  Applied <br /> Under Review
                </div>
              </div>
            </div>
            <div className="col-2 mt-3 mb-5  ">
              <BsBag className="float-end bg-light " />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-sm-6 col-xs-6 p-2 border ">
          <div className="row mx-auto">
            <div className="col-8 p-2">
              <div className="text-start">
                <h3 className="text-primary m-0 ">09</h3>
                <div className="text-muted mt-3 text-nowrap text-truncate">
                  Total <br />
                  Application Accepted
                </div>
              </div>
            </div>
            <div className="col-2 mt-3 mb-5  ">
              <BsBag className="float-end bg-light " />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xs-6 p-2 border">
          <div className="row mx-auto">
            <div className="col-8 p-2">
              <div className="text-start">
                <h3 className="text-primary m-0 ">09</h3>
                <div className="text-muted mt-3 text-nowrap text-truncate">
                  Total <br /> Application Rejected
                </div>
              </div>
            </div>
            <div className="col-2 mt-3 mb-5  ">
              <BsBag className="float-end bg-light " />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Application;
