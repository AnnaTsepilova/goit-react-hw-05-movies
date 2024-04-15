import { ReadMoreBtn, Text } from 'components/ReviewItem/ReviewItem.styled';
import React, { useState } from 'react';

const ReadMoreReview = ({ children, maxLength = 920 }) => {
  const [readBtnToggle, setReadBtnToggle] = useState(true);

  if (children.length <= maxLength) {
    return <Text>{children}</Text>;
  }
  let text = readBtnToggle
    ? children.substring(0, maxLength) + ' ...'
    : children;
  return (
    <Text>
      {text}
      <ReadMoreBtn onClick={() => setReadBtnToggle(!readBtnToggle)}>
        {readBtnToggle ? 'Read more' : 'Read less'}
      </ReadMoreBtn>
    </Text>
  );
};

export default ReadMoreReview;
