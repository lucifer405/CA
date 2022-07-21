import React from "react";
import Header from "../Header/Header";
import './landing_page.css'
import { CCard, CRow, CCol, CCardBody, CCardImage, CCardText, CCardTitle } from "@coreui/react";
import Footer from '../Footer/Footer';
const First_Page = () => {
    return (
        <div className="whole">
            <Header />
            <div className="landing">
            <div className="landing_card">
                <CCard className="mb-3">
                    <CRow className="g-0">
                        <CCol md={4}>
                            <CCardImage src="data:image/jpeg;base64,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
                            /OUxOVFWIhpCGmogJESIGklECcmRMhJapsDFFxsbGvRenVQ2ZGDDyOo856Z2di1q0kqDg6qw8xeeXV0AnoTo3r59n0Nb5QV+6xEx
                            2R5skViJoJ5VpxEmCdpUThESwx1fiZNhoiZT+wv+UishE1VVIMRJiylivdPgZHDe4vhESP8AoVGlWjx8oiWqIvcQ16j8PePIDt7IZyVC
                            30Uvbuva+vHlETJZu/Q+38Q47aTk9+V6Vv7m9ZoO3P8Aqa31z+AiJGf7IqykhiJcRkOcRAn5ynW4DxiJFEGnc+h8/wACf/a34LETPXpL/9k="/>
                        </CCol>
                        <CCol md={8}>
                            <CCardBody>
                                <CCardTitle>Card title</CCardTitle>
                                <CCardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </CCardText>
                                <CCardText>
                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                </CCardText>
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>

            </div>
            <div className="motto">
                <h1>Our Motto / Our Purpose</h1>
            </div>
            </div>
            <Footer/>
        </div>

    );
};
export default First_Page;