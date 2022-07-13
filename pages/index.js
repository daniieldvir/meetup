import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'title1',
    image:
      'https://lp-cms-production.imgix.net/2019-06/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg',
    address: 'address',
    description: 'description',
  },
  {
    id: 'm2',
    title: 'title2',
    image:
      'https://lp-cms-production.imgix.net/2019-06/8ec64b64e1d0805b1101f6c70c7f5b31-tel-aviv.jpg',
    address: 'address',
    description: 'description',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
