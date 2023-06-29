import { Product } from "../types/";
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBRipple } from "mdb-react-ui-kit";

const ProductItem: React.FC<Product> = (props: Product) => {
    return (
        <MDBCol
            md="12"
            lg="3"
            className="mb-4"
        >
            <MDBCard>
                <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                >
                    {props.images.length > 0 && (
                        <MDBCardImage
                            src={props.images[0]}
                            style={{ height: "50vh", width: "100%", objectFit: "contain" }}
                        />
                    )}
                    <a href="#!">
                        <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                                <h5>
                                    <span className="badge bg-primary ms-2">${props.price}</span>
                                </h5>
                            </div>
                        </div>
                        <div className="hover-overlay">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                        </div>
                    </a>
                </MDBRipple>
                <MDBCardBody style={{ height: "230px" }}>
                    <a
                        href="#!"
                        className="text-reset"
                    >
                        <h5 className="card-title mb-3">{props.title.toUpperCase()}</h5>
                    </a>
                    <a
                        href="#!"
                        className="text-reset"
                    >
                        <p>{props.description}...</p>
                    </a>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ProductItem;
