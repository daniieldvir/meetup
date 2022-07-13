import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://lp-cms-production.imgix.net/2019-06/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg"
      title="title"
      address="address"
      description="description"></MeetupDetail>
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log('meetupId', meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://lp-cms-production.imgix.net/2019-06/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg',
        title: 'title',
        address: 'address',
        description: 'description',
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
