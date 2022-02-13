import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import styles from "./CreateNewPostForm.module.css";
import ReactChipInput from "react-chip-input"; /** eta use korte parleo may be valo hoito .. sure na  */
import { FaTag } from "react-icons/fa";
import FileBase64 from "react-file-base64";
import Chips from "react-chips/lib/Chips";
export default function CreateNewPostForm() {
    // const [tags, setTags] = React.useState([]);
    // const [index, setIndex] = React.useStatee([]);
    const [postData, setPostData] = useState({
        contentTitle: "",
        contentDetails: "",
        // tags: [],
        chips: [],
        indexs: [],
        selectedFile: [],
        //selectedFile: "", // we are going to convert an image into base-64-image .. just in a second ..
    }); // initially empty object ...

    const [postData2, setPostData2] = useState({
        contentTitle: "",
        contentDetails: "",
        // tags: [],
        chips: [],
        indexs: [],
        selectedFile: [],
        //selectedFile: "", // we are going to convert an image into base-64-image .. just in a second ..
    }); // initially empty object ...

    // let addTag = (tag) => {
    //     // const chips = postData.tags.slice();
    //     // chips.push(tag);
    //     // this.setState({ chips });
    //     setPostData((prevState) => ({
    //         ...prevState,
    //         tags: [...prevState.tags, tag],
    //     }));
    // };
    // const removeTag = (index) => {
    //     // const chips = postData.tags.slice();
    //     // chips.splice(index, 1);
    //     // this.setState({ chips });

    //     setPostData((prevState) => ({
    //         ...prevState,
    //         tags: postData.tags.filter((tag) => tag !== index),
    //     }));
    // };

    const onChipsChange = (chip) => {
        // setPostData((prevState) => ({
        //     chips: chip,
        // }));
        setPostData((prevState) => ({
            ...prevState,
        }));

        setPostData(() => ({
            chips: chip,
        }));
    };

    const masterSubject = [
        {
            subjectNumber: 1, // value
            subjectName: "CSE",
            CourseName: [
                {
                    "Data Structure": "Data Structure",
                    Database: "Database",
                    Algorithm: "Algorithm",
                },
            ],
        },
        {
            subjectNumber: 2,
            subjectName: "EEE",
            CourseName: [
                {
                    "Electronic Device": "Electronic Device",
                    "Introduction To Electric Circuit":
                        "Introduction To Electric Circuit",
                    basicMechanicalEngineering: "basicMechanicalEngineering",
                    acCircuit: "acCircuit",
                },
            ],
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setPostData2(postData);
    };

    console.log("❤❤❤❤ Post Data 2 : ", postData2);
    return (
        <div className={styles.NewPostForm}>
            <div className={styles.title}>
                <h1>Create a new Post</h1>
            </div>

            <Form autoComplete="off" nonValidate onSubmit={handleSubmit}>
                {/* ===================================Post Title====================================== */}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Post Title"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Write your Title.."
                        name="contentTitle"
                        value={postData.contentTitle} // store in the state // name of the state is postData
                        onChange={(e) =>
                            setPostData({
                                ...postData,
                                contentTitle: e.target.value,
                            })
                        }
                    />
                </FloatingLabel>
                {/* ================================Post Details========================================= */}

                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label className={styles.fileUploadLabel}>
                        Post Details
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Write post details here..."
                        name="contentDetails"
                        value={postData.contentDetails}
                        onChange={(e) =>
                            setPostData({
                                ...postData,
                                contentDetails: e.target.value,
                            })
                        }
                        // style={{ height: "250px" }}
                        rows={6}
                        className={styles.postDetailsTextArea}
                    />
                </Form.Group>

                {/* <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Post Details"
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        name="contentDetails"
                        value={postData.contentDetails}
                        onChange={(e) =>
                            setPostData({
                                ...postData,
                                contentDetails: e.target.value,
                            })
                        }
                        style={{ height: "250px" }}
                    />
                </FloatingLabel> */}
                {/* ==================================Chip Input======================================= */}

                <div className={styles.chipsUpperGap}></div>
                <h6 className={styles.fileUploadLabel}>
                    Add some tags {`(please do seperate by comma(,))`}
                </h6>
                {/* https://www.npmjs.com/package/react-chips */}
                <Chips
                    value={postData.chips}
                    onChange={onChipsChange}
                    placeholder="tags are the only way to access this post directly"
                    // suggestions={["Your", "Data", "Here"]}
                />
                {/* ==================================Select Course ======================================= */}

                <Row className="mb-3 mt-3">
                    <h6 className={styles.fileUploadLabel}>
                        Select proper hierarchy
                    </h6>
                    <Col md>
                        <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Select Course"
                        >
                            <Form.Select
                                name="indexs"
                                // value={postData.indexs}
                                onChange={(index) =>
                                    setPostData((prevState) => ({
                                        ...prevState,
                                        indexs: [...prevState.indexs, index],
                                    }))
                                }
                                aria-label="Floating label select example"
                            >
                                <option>Open Course Name</option>
                                {masterSubject.map((Subject) => (
                                    // console.log("Iteration Print : ", Subject);
                                    <option value={Subject.subjectNumber}>
                                        {Subject.subjectName}
                                    </option>
                                ))}
                                {/* <option value="1">One</option>*/}
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    {/* ====================================Select Course===================================== */}
                    <Col md>
                        <FloatingLabel
                            controlId="floatingSelectGrid"
                            label="Select Subject"
                        >
                            <Form.Select aria-label="Floating label select example">
                                <option>Open subject menu</option>
                                {masterSubject.map((Subject) => (
                                    // console.log("Iteration Print : ", Subject);
                                    <option value={Subject.subjectNumber}>
                                        {Subject.subjectName}
                                    </option>
                                ))}
                                {/* <option value="1">One</option>*/}
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                {/* ===================================Multiple File Input====================================== */}
                <h6 className={styles.fileUploadLabel}>Multiple File Upload</h6>
                <Row>
                    <Col>
                        {/* // inside of there .. we have to use that package we
                        installed at the start .. // its called .. file base .. */}
                        <FileBase64
                            // we have to specify lot of property in here ..

                            type="file"
                            multiple
                            onDone={({ base64 }) =>
                                setPostData((prevState) => ({
                                    ...prevState,
                                    selectedFile: [
                                        ...prevState.selectedFile,
                                        base64,
                                    ],
                                }))
                            } // that we are receiving from here
                        />
                        <Button variant="primary" type="submit">
                            Post
                        </Button>
                    </Col>
                </Row>

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
            </Form>
        </div>
    );
}
