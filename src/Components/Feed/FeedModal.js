import React from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import useFetch from '../../Hooks/useFetch';
import PhotoContent from '../../Photo/PhotoContent';
import styles from './Css/FeedModal.module.css';

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useFetch(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
