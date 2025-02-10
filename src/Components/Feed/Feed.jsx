import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
  const [modalPhoto, SetModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} SetModalPhoto={SetModalPhoto} />
      )}
      <FeedPhotos SetModalPhoto={SetModalPhoto} />
    </div>
  );
};

export default Feed;
