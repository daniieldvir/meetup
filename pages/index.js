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

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
