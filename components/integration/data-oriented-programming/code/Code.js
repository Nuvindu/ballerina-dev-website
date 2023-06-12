/**
 * Copyright (c) 2023, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import Image from 'next-image-export-optimizer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { prefix } from '../../../../utils/prefix';
import styles from './Code.module.css';

export default function UseCases(props) {

    const samples = props.samples;

    const records = samples['record-type'];
    const recordsJava = samples['record-type-java'];
    const recordsBallerina = samples['record-type-ballerina'];

    const unions = samples['union-types'];
    const unionsJava = samples['union-types-java'];
    const unionsBallerina = samples['union-types-ballerina'];

    const optionals = samples['optional-types'];
    const optionalsJava = samples['optional-types-java'];
    const optionalsBallerina = samples['optional-types-ballerina'];

    const tableType = samples['table-type'];
    const tableTypeJava = samples['table-type-java'];
    const tableTypeBallerina = samples['table-type-ballerina'];

    const streamType = samples['stream-type'];
    const streamTypeJava = samples['stream-type-java'];
    const streamTypeBallerina = samples['stream-type-ballerina'];

    const typeAnnotation = samples['type-annotation-n-inference'];
    const typeAnnotationJava = samples['type-annotation-n-inference-java'];
    const typeAnnotationBallerina = samples['type-annotation-n-inference-ballerina'];

    const constraints = samples['type-constraints'];
    const constraintsJava = samples['type-constraints-java'];
    const constraintsBallerina = samples['type-constraints-ballerina'];

    const jsonXml = samples['json-n-xml-support'];
    const jsonXmlJava = samples['json-n-xml-support-java'];
    const jsonXmlBallerina = samples['json-n-xml-support-ballerina'];

    const immutability = samples['data-immutability'];
    const immutabilityJava = samples['data-immutability-java'];
    const immutabilityBallerina = samples['data-immutability-ballerina'];

    const anyType = samples['any-type'];
    const anyTypeJava = samples['any-type-java'];
    const anyTypeBallerina = samples['any-type-ballerina'];

    const smartEndpoints = samples['smart-endpoints'];
    const smartEndpointsJava = samples['smart-endpoints-java'];
    const smartEndpointsBallerina = samples['smart-endpoints-ballerina'];

    const flexibleTyping = samples['flexible-typing'];
    const flexibleTypingJava = samples['flexible-typing-java'];
    const flexibleTypingBallerina = samples['flexible-typing-ballerina'];

    const languageQuery = samples['expressive-query'];

    const patternMatching = samples['pattern-matching'];
    const patternMatchingJava = samples['pattern-matching-java'];
    const patternMatchingBallerina = samples['pattern-matching-ballerina'];

    var isResizing = false;

    const draggableElements = {
        "draggable-circle-1": {
            containerId: "code-container-1",
            leftId: "left-panel-1",
            rightId: "right-panel-1",
        },
        "draggable-circle-2": {
            containerId: "code-container-2",
            leftId: "left-panel-2",
            rightId: "right-panel-2",
        },
        "draggable-circle-3": {
            containerId: "code-container-3",
            leftId: "left-panel-3",
            rightId: "right-panel-3",
        },
        "draggable-circle-4": {
            containerId: "code-container-4",
            leftId: "left-panel-4",
            rightId: "right-panel-4",
        },
        "draggable-circle-5": {
            containerId: "code-container-5",
            leftId: "left-panel-5",
            rightId: "right-panel-5",
        },
        "draggable-circle-6": {
            containerId: "code-container-6",
            leftId: "left-panel-6",
            rightId: "right-panel-6",
        },
        "draggable-circle-7": {
            containerId: "code-container-7",
            leftId: "left-panel-7",
            rightId: "right-panel-7",
        },
        "draggable-circle-8": {
            containerId: "code-container-8",
            leftId: "left-panel-8",
            rightId: "right-panel-8",
        },
        "draggable-circle-9": {
            containerId: "code-container-9",
            leftId: "left-panel-9",
            rightId: "right-panel-9",
        },
        "draggable-circle-10": {
            containerId: "code-container-10",
            leftId: "left-panel-10",
            rightId: "right-panel-10",
        },
        "draggable-circle-11": {
            containerId: "code-container-11",
            leftId: "left-panel-11",
            rightId: "right-panel-11",
        },
        "draggable-circle-12": {
            containerId: "code-container-12",
            leftId: "left-panel-12",
            rightId: "right-panel-12",
        },
        "draggable-circle-13": {
            containerId: "code-container-13",
            leftId: "left-panel-13",
            rightId: "right-panel-13",
        }
    };

    React.useEffect(() => {
        (function () {
            var container = null;
            var left = null;
            var right = null;

            document.addEventListener("mousedown", function (e) {
                if (e.target.classList.contains("draggable")) {
                    isResizing = true;
                    const { containerId, leftId, rightId } = draggableElements[e.target.id];
                    container = document.getElementById(containerId);
                    left = document.getElementById(leftId);
                    right = document.getElementById(rightId);
                }
            });

            document.onmousemove = function (e) {
                // we don't want to do anything if we aren't resizing.
                if (!isResizing) {
                    return;
                }

                var offsetRight = container.clientWidth - (e.clientX - container.offsetLeft);

                //stop resizing if the left panel or right panel is too small
                if (e.clientX - container.offsetLeft <= 50 || offsetRight <= 50) {

                    isResizing = false;
                    return;
                }

                left.style.right = offsetRight + "px";
                right.style.width = offsetRight + "px";
            }

            document.onmouseup = function (e) {
                // stop resizing
                isResizing = false;
            }
        })();
    }, []);

    return (
        <>
            {/* records */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='record-type' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'record-type')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {records.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{records.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-1" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-1" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{recordsJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: recordsJava.code }} />
                                    </div>
                                    <div id="right-panel-1" className={`${styles["right-panel"]}`}>
                                        <div id="drag-1" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-1"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{recordsBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: recordsBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-1" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={recordsJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: recordsJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={recordsBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: recordsBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* unions */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='union-types' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'union-types')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {unions.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{unions.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-2" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-2" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{unionsJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: unionsJava.code }} />
                                    </div>
                                    <div id="right-panel-2" className={`${styles["right-panel"]}`}>
                                        <div id="drag-2" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-2"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{unionsBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: unionsBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-2" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab2" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={unionsJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: unionsJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={unionsBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: unionsBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* optionals */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='optional-types' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'optional-types')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {optionals.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{optionals.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-3" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-3" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{optionalsJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: optionalsJava.code }} />
                                    </div>
                                    <div id="right-panel-3" className={`${styles["right-panel"]}`}>
                                        <div id="drag-3" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-3"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{optionalsBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: optionalsBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-3" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={optionalsJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: optionalsJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={optionalsBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: optionalsBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* table type */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='table-type' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'table-type')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {tableType.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{tableType.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-4" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-4" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{tableTypeJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: tableTypeJava.code }} />
                                    </div>
                                    <div id="right-panel-4" className={`${styles["right-panel"]}`}>
                                        <div id="drag-4" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-4"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{tableTypeBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: tableTypeBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-4" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={tableTypeJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: tableTypeJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={tableTypeBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: tableTypeBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* stream type */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='stream-type' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'stream-type')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {streamType.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{streamType.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-5" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-5" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{streamTypeJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: streamTypeJava.code }} />
                                    </div>
                                    <div id="right-panel-5" className={`${styles["right-panel"]}`}>
                                        <div id="drag-5" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-5"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{streamTypeBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: streamTypeBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-5" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={streamTypeJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: streamTypeJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={streamTypeBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: streamTypeBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* type annotation and inference */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='type-annotation-n-inference' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'type-annotation-n-inference')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {typeAnnotation.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{typeAnnotation.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-6" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-6" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{typeAnnotationJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: typeAnnotationJava.code }} />
                                    </div>
                                    <div id="right-panel-6" className={`${styles["right-panel"]}`}>
                                        <div id="drag-6" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-6"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{typeAnnotationBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: typeAnnotationBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-6" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={typeAnnotationJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: typeAnnotationJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={typeAnnotationBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: typeAnnotationBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* type constraint */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='type-constraints' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'type-constraints')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {constraints.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{constraints.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-7" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-7" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{constraintsJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: constraintsJava.code }} />
                                    </div>
                                    <div id="right-panel-7" className={`${styles["right-panel"]}`}>
                                        <div id="drag-7" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-7"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{constraintsBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: constraintsBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-7" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={constraintsJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: constraintsJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={constraintsBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: constraintsBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* json and xml */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='json-n-xml-support' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'json-n-xml-support')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {jsonXml.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{jsonXml.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-8" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-8" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{jsonXmlJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: jsonXmlJava.code }} />
                                    </div>
                                    <div id="right-panel-8" className={`${styles["right-panel"]}`}>
                                        <div id="drag-8" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-8"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{jsonXmlBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: jsonXmlBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-8" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={jsonXmlJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: jsonXmlJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={jsonXmlBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: jsonXmlBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* data-immutability */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='data-immutability' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'data-immutability')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {immutability.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{immutability.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-9" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-9" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{immutabilityJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: immutabilityJava.code }} />
                                    </div>
                                    <div id="right-panel-9" className={`${styles["right-panel"]}`}>
                                        <div id="drag-9" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-9"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{immutabilityBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: immutabilityBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-9" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={immutabilityJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: immutabilityJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={immutabilityBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: immutabilityBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* any type */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='any-type' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'any-type')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {anyType.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{anyType.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-10" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-10" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{anyTypeJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: anyTypeJava.code }} />
                                    </div>
                                    <div id="right-panel-10" className={`${styles["right-panel"]}`}>
                                        <div id="drag-10" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-10"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{anyTypeBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: anyTypeBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-10" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={anyTypeJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: anyTypeJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={anyTypeBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: anyTypeBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* smart endpoints */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='smart-endpoints' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'smart-endpoints')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {smartEndpoints.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{smartEndpoints.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-11" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-11" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{smartEndpointsJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: smartEndpointsJava.code }} />
                                    </div>
                                    <div id="right-panel-11" className={`${styles["right-panel"]}`}>
                                        <div id="drag-11" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-11"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{smartEndpointsBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: smartEndpointsBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-11" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={smartEndpointsJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: smartEndpointsJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={smartEndpointsBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: smartEndpointsBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* flexible typing */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='flexible-typing' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'flexible-typing')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {flexibleTyping.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{flexibleTyping.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-12" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-12" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{flexibleTypingJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: flexibleTypingJava.code }} />
                                    </div>
                                    <div id="right-panel-12" className={`${styles["right-panel"]}`}>
                                        <div id="drag-12" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-12"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{flexibleTypingBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: flexibleTypingBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-12" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={flexibleTypingJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: flexibleTypingJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={flexibleTypingBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: flexibleTypingBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* expressive query syntax */}
            <Row className="pageContentRow integration code odd">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='expressive-query' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'expressive-query')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {languageQuery.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{languageQuery.frontmatter.description}</ReactMarkdown>

                                    {
                                        (languageQuery.frontmatter.url && languageQuery.frontmatter.url !== '') ?
                                            <div className={styles.dVersion}>
                                                <a href={languageQuery.frontmatter.url} className={styles.cDownload} target="_blank" rel="noreferrer">
                                                    <Image src={`${prefix}/images/github-grey.svg`} width={20} height={20} alt="View code on GitHub" />
                                                    View code on GitHub
                                                </a>
                                            </div>
                                            : null
                                    }

                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={styles.box}>
                                {
                                    (languageQuery.code && languageQuery.code !== '') ?
                                        <div className={styles.codeSnippet}>
                                            <div className="highlight" dangerouslySetInnerHTML={{ __html: languageQuery.code }} />
                                        </div>
                                        : null
                                }
                                {
                                    (languageQuery.frontmatter.image && languageQuery.frontmatter.image !== '') ?
                                        <img src={`${prefix}/${languageQuery.frontmatter.image}`} alt={languageQuery.frontmatter.title} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* pattern matching */}
            <Row className="pageContentRow integration code">
                <Col xs={12}>
                    <Container>
                        <Row>
                            <Col xs={12} className={styles.box}>
                                <h2 id='pattern-matching' className='section'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        className="bi bi-link-45deg mdButton pe-2"
                                        viewBox="0 0 16 16"
                                        onClick={(e) => props.getLink(e.target, 'pattern-matching')}
                                    >
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                    {patternMatching.frontmatter.title}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={5} lg={5} className={styles.box}>
                                <div className={styles.wrapper}>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{patternMatching.frontmatter.description}</ReactMarkdown>
                                </div>
                            </Col>
                            <Col xs={12} md={7} lg={7} className={`${styles.box}`}>

                                <div id="code-container-13" className={`${styles["code-container"]} d-none d-lg-block`}>
                                    <div id="left-panel-13" className={`${styles["left-panel"]}`}>
                                        <p className={`${styles["title-old"]}`}>{patternMatchingJava.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: patternMatchingJava.code }} />
                                    </div>
                                    <div id="right-panel-13" className={`${styles["right-panel"]}`}>
                                        <div id="drag-13" className={`${styles["drag"]}`}>
                                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${styles["button-wrap"]} absolute`}>
                                                <circle cx="23" cy="23" r="23" fill="#20b6b0" className='draggable' id="draggable-circle-13"></circle>
                                                <path d="M10.4375 22.5625C10.4375 22.2988 10.5254 22.0645 10.7012 21.8887L16.3262 16.2637C16.6777 15.8828 17.293 15.8828 17.6445 16.2637C18.0254 16.6152 18.0254 17.2305 17.6445 17.582L12.6934 22.5625L17.6445 27.5137C18.0254 27.8652 18.0254 28.4805 17.6445 28.832C17.293 29.2129 16.6777 29.2129 16.3262 28.832L10.7012 23.207C10.5254 23.0312 10.4375 22.7969 10.4375 22.5625Z" fill="white"></path>
                                                <path d="M35.5625 22.5625C35.5625 22.2988 35.4746 22.0645 35.2988 21.8887L29.6738 16.2637C29.3223 15.8828 28.707 15.8828 28.3555 16.2637C27.9746 16.6152 27.9746 17.2305 28.3555 17.582L33.3066 22.5625L28.3555 27.5137C27.9746 27.8652 27.9746 28.4805 28.3555 28.832C28.707 29.2129 29.3223 29.2129 29.6738 28.832L35.2988 23.207C35.4746 23.0312 35.5625 22.7969 35.5625 22.5625Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <p className={`${styles["title-new"]}`}>{patternMatchingBallerina.frontmatter.title}</p>
                                        <div className={`${styles["code-panel"]}`} dangerouslySetInnerHTML={{ __html: patternMatchingBallerina.code }} />
                                    </div>
                                </div>

                                {/* mobile view */}
                                <div id="code-tab-13" className={`${styles["code-tab"]} d-block d-lg-none`}>
                                    <Tabs defaultActiveKey="ballerina-code" id="codeTab1" className="mb-3 codeTabs">
                                        <Tab eventKey="java-code" title={patternMatchingJava.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: patternMatchingJava.code }} />
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ballerina-code" title={patternMatchingBallerina.frontmatter.title}>
                                            <div className={styles.codeSnippet}>
                                                <div className="highlight" dangerouslySetInnerHTML={{ __html: patternMatchingBallerina.code }} />
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    );
}
