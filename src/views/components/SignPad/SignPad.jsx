import React, { useContext, useRef } from "react";
import AppContext from "../../../context/AppContext";
import SignaturePad from "signature_pad";

const SignPad = () => {
    const { applicationForm, setApplicationForm, setDisableSend } =
        useContext(AppContext);
    const clearSignpadBtn = useRef();

    React.useEffect(() => {
        // var sketchpad = new Sketchpad({
        //     element: "#signpad",
        //     width: window.innerWidth - 50,
        //     height: window.innerHeight - 500,
        // });

        const canvas = document.querySelector("#signpad");
        const signaturePad = new SignaturePad(canvas);
        clearSignpadBtn.current.addEventListener("click", () => {
            signaturePad.clear();
        });
    }, []);

    return (
        <>
            <button
                type="button"
                className="btn btn-primary d-none"
                id="signpadButton"
                data-bs-toggle="modal"
                data-bs-target="#signpadModal"
            >
                Launch demo modal
            </button>

            <div
                className="modal fade"
                id="signpadModal"
                aria-labelledby="signpadModalLabel"
                aria-hidden="true"
                data-bs-backdrop="static"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <p className="modal-title mx-auto">
                                By Signing this document, I hearby approve that
                                the information I gave in this form is correct
                                and I agree that if somehow the information I
                                gave is fake, KPTM/KUPTM Kuala Lumpur can
                                legally reject my application, and revert back
                                any offer or terminate my study in Kolej
                                Poly-Tech Mara/ Kolej Universiti Poly-Tech MARA
                                (KUPTM) Kuala Lumpur at any given time
                            </p>
                        </div>
                        <div className="modal-body text-center">
                            <h5>SIGN HERE:</h5>
                            <canvas
                                id="signpad"
                                className="d-block mx-auto my-2"
                                style={{
                                    border: "1px solid black",
                                }}
                            ></canvas>
                            <button
                                className="btn btn-secondary btn-sm"
                                ref={clearSignpadBtn}
                            >
                                RESET
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    let key = "consent";
                                    let value = false;
                                    setApplicationForm({
                                        ...applicationForm,
                                        [key]: value,
                                    });
                                    setDisableSend(true);
                                }}
                            >
                                Disagree
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    let key = "consent";
                                    let value = true;
                                    setApplicationForm({
                                        ...applicationForm,
                                        [key]: value,
                                    });
                                    setDisableSend(false);
                                }}
                            >
                                Agree
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignPad;
