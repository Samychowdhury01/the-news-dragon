import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt,FaRegStar, FaStar } from "react-icons/fa";
import Image from 'react-bootstrap/Image'
import moment from "moment/moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, rating, total_view, author, image_url, details } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
                <Image style={{ height: '40px' }} src={author.img} roundedCircle/>
                <div>
                <p className="mb-0">{author.name}</p>
                <p className="mb-0">{moment(author?.published_date).format('YYYY-MM-D')}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className="fs-4 me-2"/>
                <FaShareAlt className="fs-4"/>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="mb-4">{title}</Card.Title>
          <Card.Img variant="top" src={image_url} className="mb-5" />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}... 
                <Link to={`/news/${_id}`} className='text-warning text-decoration-none fw-bold'> Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
            <div className="d-flex align-items-center gap-2">
                <Rating
                placeholderRating={rating?.number}
                emptySymbol={<FaRegStar/>}
                placeholderSymbol={<FaStar/>}
                fullSymbol={<FaStar/>}
                readonly
                ></Rating>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye className="fs-5"/>
                <span className="ms-2">{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
