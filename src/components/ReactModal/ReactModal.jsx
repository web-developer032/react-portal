import { useState } from "react";
import ReactPortal from "./ReactPortal/ReactPortal";

function ReactModal() {
    const [modal, setModal] = useState(false);
    const handleCloseModal = () => {
        setModal(false);
    };

    return (
        <section className="reactModal">
            <button className="btn" onClick={() => setModal((prev) => !prev)}>
                Toggle Modal
            </button>

            {modal && (
                <ReactPortal onClose={handleCloseModal}>
                    <section className="content">
                        <h2>I am Modal</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eius,
                            quae sunt et iste voluptatem, magnam earum at magni autem, commodi quis
                            adipisci eveniet? Corrupti eos molestias cupiditate delectus beatae.
                        </p>
                    </section>
                </ReactPortal>
            )}
        </section>
    );
}

export default ReactModal;
