import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { storage, db } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDescription, setEnterShortDescription] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImage, setEnterProductImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // add product to firebase database
    try {
      const docRef = await collection(db, "products");
      const storageref = ref(
        storage,
        `product_images/${Date.now() + enterProductImage.name}`
      );
      const uploadTask = uploadBytesResumable(storageref, enterProductImage);
      uploadTask.on(
        () => {
          toast.error("image not uploaded!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: enterTitle,
              shortDescription: enterShortDescription,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Product added successfully");
      navigate("/dashbord/allproducts");
    } catch (error) {
      setLoading(false);
      toast.error(`product not added!`);
    }
    // console.log(product);
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Products</h4>
            {loading ? (
              <h4 className="py-5">Loading ....</h4>
            ) : (
              <Form onSubmit={handleAddProduct}>
                <FormGroup className="form__group">
                  <span>Product Title</span>
                  <input
                    type="text"
                    placeholder="Double Sofa"
                    value={enterTitle}
                    onChange={(e) => setEnterTitle(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Short description </span>
                  <input
                    type="text"
                    placeholder="Lorem...."
                    value={enterShortDescription}
                    onChange={(e) => setEnterShortDescription(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Description </span>
                  <input
                    type="text"
                    placeholder="Description..."
                    value={enterDescription}
                    onChange={(e) => setEnterDescription(e.target.value)}
                    required
                  />
                </FormGroup>
                <div className=" d-flex align-items-center justify-content-between gap-5">
                  <FormGroup className="form__group w-50">
                    <span>Price </span>
                    <input
                      type="number"
                      placeholder="$100"
                      value={enterPrice}
                      onChange={(e) => setEnterPrice(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup
                    className="form__group w-50"
                    value={enterCategory}
                    onChange={(e) => setEnterCategory(e.target.value)}
                  >
                    <span>Category </span>
                    <select
                      className="w-100 p-2"
                      name=""
                      id=""
                      value={enterCategory}
                      onChange={(e) => setEnterCategory(e.target.value)}
                      required
                    >
                      <option value="chair">Chair</option>
                      <option value="sofa">Sofa</option>
                      <option value="mobile">Mobile</option>
                      <option value="watch">Watch</option>
                      <option value="wireless">Wireless</option>
                    </select>
                  </FormGroup>
                </div>
                <div className="">
                  <FormGroup className="form__group">
                    <span>Product Image</span>
                    <input
                      type="file"
                      onChange={(e) => setEnterProductImage(e.target.files[0])}
                      required
                    />
                  </FormGroup>
                </div>
                <button className=" buy__btn" type="submit">
                  Add Product
                </button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
