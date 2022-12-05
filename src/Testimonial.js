// Coded by yonutdev.xyz
import React from 'react'
import Col from 'react-bootstrap/Col'
import './Testimonial.css'

export default function Testimonial({ avatar, name, title, description, id, col }) {
  return (
        <Col sm={12} md={col}>
            <div className="testimonial" id={id}>
                <div className="testimonial-author">
                    <img src={avatar} alt={name} className="author-avatar" />
                    <div className="author-details">
                        {name}
                        <br>
                        </br><span className="author-subname">Verified Graduate</span>
                    </div>
                </div>
                <div className="testimonial-content">
                    <h3 className="testimonial-title">{title}</h3>
                    <p className="testimonial-description">&ldquo;{description}&rdquo;</p>
                </div>
            </div>
        </Col>
  )
}
