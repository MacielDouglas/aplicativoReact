import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOT_GET } from '../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import useFetch from '../Hooks/useFetch';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOT_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head
          title={data.photo.title}
          description="Foto do usuario do site Dogs."
        />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
